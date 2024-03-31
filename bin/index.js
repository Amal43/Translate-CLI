#! /usr/bin/env node

import yargs from "yargs";
import chalk from "chalk";
import boxen from "boxen";
import { translate } from '@vitalets/google-translate-api';

const usage = chalk.hex('#9400D3')("\nUsage: mycli -l <language> -s <sentence> ^ ^\n") +
boxen(chalk.hex('#4040e1')("\nTranslates a sentence to a specific language\n"), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n";
console.log(usage);

const options = yargs(process.argv)
.usage(usage)
.option("l", { alias: "language", describe: "Translate to language", type: "string", demandOption: false })
.option("s", { alias: "sentence", describe: "Sentence to be translated", type: "string", demandOption: false })
.help(true)
.argv;

const { text } = await translate(options.sentence, { to:  options.language });
if(text !== "undefined"){
    console.log("\n" + boxen(chalk.hex('#9400D3')("\n" + text + "\n"), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n");
}
