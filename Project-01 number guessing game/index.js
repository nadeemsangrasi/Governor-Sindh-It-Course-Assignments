import inquirer from "inquirer";
console.log("Welcome to my number guessing Game");
console.log("You have 10 chances to win");
let count = 0;
while (count < 11) {
    count++;
    let randomNumber = Math.floor(Math.random() * 10);
    let guessNumber = await inquirer.prompt([{ name: "guess", type: "number", message: "Guess number from 0 to 10" }]);
    if (guessNumber.guess > randomNumber) {
        console.log("Your guess is too high");
    }
    else if (guessNumber.guess < randomNumber) {
        console.log("Your guess is too low");
    }
    else {
        console.log("Congratulations your guess is correct");
        break;
    }
}
