/* eslint-disable no-console */
import { createPullRequest } from 'octokit-plugin-create-pull-request';
import { OctokitResponse, RequestError } from '@octokit/types';
import semver, { SemVer } from 'semver';
import { Octokit } from '@octokit/rest';
import chalk from 'chalk';
import lockFileGenerator from '../lib/lockFileGenerator';
import getRepoDetails from '../lib/getRepoDetails';
import generatePRobj from '../lib/generatePR';
import { PackageJsonType } from '../types';
import parseCSV from '../lib/parseCSV';

const versionVerifier = async (
    inputPackage: string,
    { input, update = null, token = null }: { input: string; update: boolean | null; token: string | null },
) => {
    try {
        const [packageName, version] = inputPackage.split('@');
        const parsedData = await parseCSV(input);
        const MyOctokit = Octokit.plugin(createPullRequest);
        const octokit = token ? new MyOctokit({ auth: token }) : new MyOctokit();
        const verifierResult = await Promise.all(
            parsedData.map(async ([name, repoURL]) => {
                const { owner, repoName } = getRepoDetails(repoURL);
                try {
                    const res: OctokitResponse<string> | string = await octokit.request(
                        `GET /repos/${owner}/${repoName}/contents/package.json`,
                        {
                            headers: {
                                accept: 'application/vnd.github.v3.raw',
                            },
                        },
                    );
                    const packageJson: PackageJsonType = <PackageJsonType>JSON.parse(res.data);
                    if (!packageJson.dependencies[packageName]) throw new Error('Package does not exist in dependency');
                    const parsedVersion = <SemVer>semver.coerce(packageJson.dependencies[packageName]);
                    const versionSatisfied = semver.gte(parsedVersion, version);
                    if (!update || versionSatisfied)
                        return {
                            name,
                            version: parsedVersion.version,
                            version_satisfied: versionSatisfied,
                        };
                    if (!token) throw new Error('Personal access token is required to perform PR');
                    packageJson.dependencies[packageName] = `v${version}`;
                    const packageLock: string = lockFileGenerator(packageJson);
                    const pr = await octokit.createPullRequest(
                        generatePRobj(
                            owner,
                            repoName,
                            packageName,
                            parsedVersion.version,
                            version,
                            JSON.stringify(packageJson, null, 2),
                            packageLock,
                        ),
                    );
                    return {
                        name,
                        version: parsedVersion.version,
                        version_satisfied: versionSatisfied,
                        update_pr: pr?.data.html_url,
                    };
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (err: any) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    if (err && err.name && err.status) {
                        const error = <RequestError>err;
                        if (error.status === 404)
                            return {
                                name,
                                version: 'Not available',
                                version_satisfied: null,
                                error: 'Recheck URL or pass personal token with -t <TOKEN>',
                            };
                    }
                    const error = <Error>err;
                    return {
                        name,
                        version: 'Not available',
                        version_satisfied: null,
                        error: error.message,
                    };
                }
            }),
        );

        console.table(verifierResult);
    } catch (err: unknown) {
        const error = <Error>err;
        console.error(chalk.red(error.message));
    }
};

export default versionVerifier;
