import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("Welcome to my ATM"));
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{ message: chalk.greenBright("Enter your pin number"), type: "number", name: "pin" }]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.yellow("correct pin code!!"));
    let chooseOption = await inquirer.prompt([{ name: "operation", message: "Please select option", type: "list", choices: [chalk.whiteBright("Withdraw"), chalk.whiteBright("Fast payment"), chalk.whiteBright("Check balance")] }]);
    if (chooseOption.operation === chalk.whiteBright("Withdraw")) {
        let getAmmount = await inquirer.prompt([{ message: chalk.greenBright("Enter ammount you want"), name: "ammount", type: "number" }]);
        if (getAmmount.ammount > myBalance) {
            console.log(chalk.red("sorry you have a insufficient balance"));
        }
        else {
            myBalance -= getAmmount.ammount;
            console.log(chalk.yellow(`you Withdraw Rs ${getAmmount.ammount}\nyour remaining balance is ${myBalance}`));
        }
    }
    else if (chooseOption.operation === chalk.whiteBright("Check balance")) {
        console.log(chalk.yellow(`your balance is ${myBalance}`));
    }
    else if (chooseOption.operation === chalk.whiteBright("Fast payment")) {
        let selectAmmount = await inquirer.prompt([{ name: "ammount", message: chalk.whiteBright("Please select ammount you want"), type: "list", choices: [chalk.whiteBright("1000"), chalk.whiteBright("2000"), chalk.whiteBright("3000")] }]);
        if (selectAmmount.ammount === chalk.whiteBright("1000")) {
            let remaining = myBalance - 1000;
            console.log(chalk.yellow(`you Withdraw Rs ${3000}\nyour remaining balance is ${remaining}`));
        }
        else if (selectAmmount.ammount === chalk.whiteBright("2000")) {
            let remaining = myBalance - 2000;
            console.log(chalk.yellow(`you Withdraw Rs ${3000}\nyour remaining balance is ${remaining}`));
        }
        else if (selectAmmount.ammount === chalk.whiteBright("3000")) {
            let remaining = myBalance - 3000;
            console.log(chalk.yellow(`you Withdraw Rs ${3000}\nyour remaining balance is ${remaining}`));
        }
    }
    else if (chooseOption.operation === chalk.whiteBright("Quit")) {
        console.log(chalk.magenta("Bye Bye have a good day"));
    }
}
else {
    console.log(chalk.red("Please enter valid pin"));
}
