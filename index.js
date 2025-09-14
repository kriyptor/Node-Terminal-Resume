#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import boxen from 'boxen';
import wrapAnsi from 'wrap-ansi';
import { fileURLToPath } from 'url';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resumePath = path.join(__dirname, 'resume.txt');

let resume = '';
try {
    resume = fs.readFileSync(resumePath, 'utf-8');
} catch (err) {
    console.error(chalk.red('Error reading resume.txt file:'), err.message);
    process.exit(1);
}

const header = chalk.green('SHIVANSHU KASHYAP');

const terminalWidth = process.stdout.columns || 80;
const maxContentWidth = terminalWidth - 10;  // Slight margin for padding and box

// Wrap the resume content to fit the terminal
const wrappedResume = wrapAnsi(resume, maxContentWidth, { hard: true });

const fullContent = header + '\n' + chalk.white(wrappedResume);

const boxedResume = boxen(fullContent, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'blue',
    backgroundColor: 'black',
    align: 'left',
    float: 'center',
    width: Math.min(terminalWidth - 4, 120)
});

console.log(boxedResume);
