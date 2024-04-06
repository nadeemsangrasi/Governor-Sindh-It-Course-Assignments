#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("Welcome to my currency convertor app"));
let currency = {
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
let fromAmmount = currency[answer.from];
let toAmmount = currency[answer.to];
if (!isNaN(answer.ammount)) {
    let baseAmmount = answer.ammount / fromAmmount;
    let convertAmmount = Math.floor(toAmmount * baseAmmount);
    console.log(chalk.yellow(`Your currency exchanged ${answer.to}:"${convertAmmount}" from ${answer.from} to ${answer.to}`));
}
else {
    console.log(chalk.red("Please entre valid ammount"));
}
