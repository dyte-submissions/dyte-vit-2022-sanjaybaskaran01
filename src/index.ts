#!/usr/bin/env node
/* eslint-disable no-console */

import { Command, createCommand } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import verionVerifier from './commands/versionVerifier';

const program: Command = createCommand();

console.log(chalk.green(figlet.textSync('Ellie-CLI', { horizontalLayout: 'full' })));

program
    .name('ellie-cli')
    .version('1.0.1')
    .description('CLI tool to update dependencies hassle-free')
    .requiredOption('-i, --input <csv>', 'path of csv file that contains all repos')
    .option('-u, --update', 'update the dependency')
    .option('-t, --token <token>', 'enter personal access token')
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
