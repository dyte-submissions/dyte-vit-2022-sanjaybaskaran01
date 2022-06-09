import * as fs from 'fs';
import { parse } from 'fast-csv';

const parseCSV = async (inputDir: string) => {
    const records: [string, string][] = [];
    if (!fs.existsSync(inputDir))
        throw new Error(`error: option '-i, --input <csv>' argument invalid, no such file exists
    `);
    const parser = fs.createReadStream(inputDir).pipe(parse());
    // eslint-disable-next-line no-restricted-syntax
    for await (const record of parser) {
        records.push(<[string, string]>record);
    }
    return records;
};
export default parseCSV;
