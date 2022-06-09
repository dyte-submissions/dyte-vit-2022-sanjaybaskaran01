#!/usr/bin/env node
/* eslint-disable no-console */

import { Command, createCommand } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import verifier from './commands/verifier';

const program: Command = createCommand();

console.log(chalk.green(figlet.textSync('package-cli', { horizontalLayout: 'full' })));

program
    .version('0.0.1')
    .description('CLI tool to update dependencies hassle-free')
    .requiredOption('-i, --input <csv>')
    .option('-u, --update', 'To update the dependency')
    .argument('<version>')
    .action(verifier);

program.parse();
