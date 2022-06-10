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
    body: `Updates the version of \`${packageName}\` from \`${oldVersion}\` to \`${newVersion}\``,
    title: `chore: updates ${packageName} to ${newVersion}`,
    // TODO: Need to figure out how to dynamically update head
    head: 'chore/updates-version-6',
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
    forceFork: true,
});
export default generatePRObject;
