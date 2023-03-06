import { execSync } from 'child_process';
import fs from 'fs';
import { PackageJsonType } from '../types';

const lockFileGenerator = (packageJson: PackageJsonType, lockData: string, packageManager: 'npm' | 'yarn'): string => {
    const tempPath = fs.mkdtempSync('temp');
    fs.writeFileSync(`${tempPath}/package.json`, JSON.stringify(packageJson));
    fs.writeFileSync(`${tempPath}/${packageManager === 'npm' ? 'package-lock.json' : 'yarn.lock'}`, lockData);
    execSync(`${packageManager === 'npm' ? 'npm i --package-lock-only' : 'yarn install --mode update-lockfile'}`, {
        cwd: tempPath,
    });
    const data = fs.readFileSync(`${tempPath}/${packageManager === 'npm' ? 'package-lock.json' : 'yarn.lock'}`);
    fs.rmSync(tempPath, { recursive: true });
    return data.toString();
};

export default lockFileGenerator;
