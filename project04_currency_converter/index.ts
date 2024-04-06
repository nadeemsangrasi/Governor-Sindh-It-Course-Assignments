#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("Welcome to my currency convertor app"));

type Currency = {
  USD: number;
  EUR: number;
  GBP: number;
  INR: number;
  PKR: number;
};
let currency: Currency = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.bold("Enter from currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: chalk.bold("Enter to currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "ammount",
    type: "number",
    message: chalk.bold("Enter ammount to convert"),
  },
]);
let fromAmmount: number = currency[answer.from as keyof Currency];
let toAmmount: number = currency[answer.to as keyof Currency];
if (!isNaN(answer.ammount)) {
  let baseAmmount: number = answer.ammount / fromAmmount;
  let convertAmmount: number = Math.floor(toAmmount * baseAmmount);
  console.log(
    chalk.yellow(
      `Your currency exchanged ${answer.to}:"${convertAmmount}" from ${answer.from} to ${answer.to}`
    )
  );
} else {
  console.log(chalk.red("Please entre valid ammount"));
}
