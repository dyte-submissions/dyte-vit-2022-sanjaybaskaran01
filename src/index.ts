#!/usr/bin/env node
/* eslint-disable no-console */

import { Command, createCommand } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import verionVerifier from './commands/versionVerifier';

const program: Command = createCommand();

console.log(chalk.green(figlet.textSync('package-cli', { horizontalLayout: 'full' })));

program
    .version('1.0.0')
    .description('CLI tool to update dependencies hassle-free')
    .requiredOption('-i, --input <csv>', 'Path of csv file that contains all repos')
    .option('-u, --update', 'To update the dependency')
    .option('-t, --token <token>', 'To enter personal access token')
    .argument('<version>')
    .action(verionVerifier)
    .showHelpAfterError()
    .showSuggestionAfterError(true);

try {
    program.parse();
} catch (e: unknown) {
    const error = <Error>e;
    console.error(error);
}
