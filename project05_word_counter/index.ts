#! /usr/bin/env node
import Inquirer from "inquirer";
import Chalk from "chalk";

const answer: { sentance: string } = await Inquirer.prompt([
  {
    name: "sentance",
    message: Chalk.bold("Enter your sentence to count the word: "),
    type: "input",
  },
]);

const words: string[] = answer.sentance.trim().split(" ");

console.log(Chalk.yellow(`Your sentence word count is ${words.length}`));
