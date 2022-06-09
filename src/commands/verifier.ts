/* eslint-disable no-console */
import { OctokitResponse } from '@octokit/types';
import { Octokit } from 'octokit';
import semver, { SemVer } from 'semver';
import { PackageJsonType } from '../types';

const verifier = async (Package: string, { input, update = null }: { input: string; update: string | null }) => {
    const [packageName, version] = Package.split('@');
    const octokit = new Octokit();
    const res: OctokitResponse<string> = await octokit.request(
        'GET /repos/dyte-in/backend-sample-app/contents/package.json',
        {
            headers: {
                accept: 'application/vnd.github.v3.raw',
            },
        },
    );
    // It checks only Dependencies for now
    const packageJson: PackageJsonType = <PackageJsonType>JSON.parse(res.data);
    if (!packageJson.dependencies[packageName]) throw new Error('Package does not exist in dependency');
    const parsedVersion = <SemVer>semver.coerce(packageJson.dependencies[packageName]);
    console.log(semver.gte(parsedVersion, version));
};

export default verifier;
