#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';

const resumePath = path.join(process.cwd(), 'resume.txt');
const resume = fs.readFileSync(resumePath, 'utf-8');

const header = chalk.green(figlet.textSync('SHIVANSHU KASHYAP'));
const content = chalk.white(resume);

const boxedResume = boxen(header + '\n' + content, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'blue',
    backgroundColor: 'black'
});

console.log(boxedResume);
