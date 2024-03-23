#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.magenta("Welcome to my number guessing Game"))
console.log(chalk.cyanBright("You have 10 chances to win"))
let count:number=0
while(count<10){
    count++
    let randomNumber : number = Math.floor(Math.random()*10+1)
    let guessNumber =  await inquirer.prompt([{name:"guess",type:"number",message:chalk.whiteBright("Guess number from 1 to 10")}])
    if(!Number.isNaN(guessNumber.guess) && guessNumber.guess<=10){
        if(guessNumber.guess>randomNumber){
            console.log(chalk.blue(`Your guess is too high\nyour guess ${guessNumber.guess} and computer number ${randomNumber}`)) 
        }
        else if(guessNumber.guess<randomNumber){
            console.log(chalk.yellow(`Your guess is too low\nyour guess ${guessNumber.guess} and computer number ${randomNumber} `))
        }
        else{
            console.log(chalk.green(`Congratulations your guess is correct\nyour guess ${guessNumber.guess} and computer number ${randomNumber} `))
            break
        }
    }
    else{

        console.log(chalk.redBright(`Please enter valid number\nyour provided value is ${guessNumber.guess}`))


}
