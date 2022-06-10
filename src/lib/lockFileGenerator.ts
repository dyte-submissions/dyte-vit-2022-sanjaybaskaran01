import { execSync } from 'child_process';
import fs from 'fs';
import { PackageJsonType } from '../types';

const lockFileGenerator = (packageJson: PackageJsonType, packageLock: string): string => {
    const tempPath = fs.mkdtempSync('temp');
    fs.writeFileSync(`${tempPath}/package.json`, JSON.stringify(packageJson));
    fs.writeFileSync(`${tempPath}/package-lock.json`, packageLock);
    execSync('npm i --package-lock-only', { cwd: tempPath });
    const data = fs.readFileSync(`${tempPath}/package-lock.json`);
    fs.rmSync(tempPath, { recursive: true });
    return data.toString();
};

export default lockFileGenerator;
