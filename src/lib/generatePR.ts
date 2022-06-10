import { Options } from 'octokit-plugin-create-pull-request/dist-types/types';

const generatePRObject = (
    owner: string,
    repoName: string,
    packageName: string,
    oldVersion: string,
    newVersion: string,
    packageJson: string,
    lockData: string,
    packageManager: 'npm' | 'yarn',
): Options => ({
    owner,
    repo: repoName,
    body: `Updates the version of \`${packageName}\` from \`${oldVersion}\` to \`${newVersion}\``,
    title: `chore: updates ${packageName} to ${newVersion}`,
    // Forked branch name
    head: `chore/updates-version-${Date.now().toString(36)}`,
    createWhenEmpty: false,
    changes: [
        {
            files: {
                'package.json': {
                    content: packageJson,
                    encoding: 'utf-8',
                },
                [packageManager === 'npm' ? 'package-lock.json' : 'yarn.lock']: {
                    content: lockData,
                    encoding: 'utf-8',
                },
            },
            commit: `chore: updates ${packageName} to ${newVersion}`,
        },
    ],
    forceFork: true,
});
export default generatePRObject;
