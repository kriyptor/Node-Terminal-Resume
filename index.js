import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Correct path to the resume bundled with your package
const resumePath = join(__dirname, 'resume.txt');
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
