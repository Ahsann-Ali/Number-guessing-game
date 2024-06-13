#! /usr/bin/env node
import inquirer from "inquirer";
// 1st Step(Computer Generate Random Number)
const randomNumber = Math.floor(Math.random() * 10 + 1);
// 2nd Step(Take User Input)
const answer = await inquirer.prompt([{ message: "Please type any number between 1 to 10 =", type: "number", name: "usersNumber" }]);
// 3rd step (Compare both number and show results)
if (answer.usersNumber === randomNumber) {
    console.log("Congrats! You win the game");
}
else {
    console.log("Try Again");
}
;
// npx command
// npx number-guessing-game-by-ahsan-ali
