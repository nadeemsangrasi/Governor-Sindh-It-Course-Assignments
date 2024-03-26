#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter fisrt number", type: "number", name: "firstNum" },
    { message: "Enter second number", type: "number", name: "secondNum" },
    {
        message: "Choose operation given below",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multyplication", "Division"],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.firstNum + answer.secondNum);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator === "Multyplication") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNum / answer.secondNum);
}
else {
    console.log("Please choose right operation");
}
