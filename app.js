#! /usr/bin/env node
import inquirer from "inquirer";
console.log("WELCOME TO A NUMBER GUESSING GAME");
console.log("MADE BY: SHAH HASSAN");
const randomNumber = Math.floor(Math.random() * 7 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-7: "
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed a right Number.");
}
else if (answers.userGuessedNumber != randomNumber) {
    console.log("Sorry you guessed a wrong number.");
}
