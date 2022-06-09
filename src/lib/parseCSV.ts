import * as fs from 'fs';
import { parse } from 'fast-csv';

const parseCSV = async (inputDir: string) => {
    const records: [string, string][] = [];
    const parser = fs.createReadStream(inputDir).pipe(parse());

    // eslint-disable-next-line no-restricted-syntax
    for await (const record of parser) {
        records.push(<[string, string]>record);
    }
    return records;
};
export default parseCSV;
