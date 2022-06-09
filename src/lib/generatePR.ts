import { Options } from 'octokit-plugin-create-pull-request/dist-types/types';

const generatePRObject = (
    owner: string,
    repoName: string,
    packageName: string,
    oldVersion: string,
    newVersion: string,
    packageJson: string,
    packageLock: string,
): Options => ({
    owner,
    repo: repoName,
    body: `Updates the version of axios from ${oldVersion} to ${newVersion}`,
    title: `chore: updates ${packageName} to ${newVersion}`,
    head: 'chore/updates-version-2',
    createWhenEmpty: false,
    changes: [
        {
            files: {
                'package.json': {
                    content: packageJson,
                    encoding: 'utf-8',
                },
                'package-lock.json': {
                    content: packageLock,
                    encoding: 'utf-8',
                },
            },
            commit: `chore: updates ${packageName} to ${newVersion}`,
        },
    ],
});
export default generatePRObject;
