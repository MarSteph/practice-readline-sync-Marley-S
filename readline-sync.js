const readline = require("readline-sync");

let name = readline.question("What is your name? ");

console.log(`Hello ${name}!`);

let answerOne = readline.question("What is this data type: 'Hello!'? ");

console.log("Your answer: ", answerOne);

let answerTwo = readline.questionInt("What is an example of the number data type? ");

console.log("Your answer: ",  answerTwo);

let answerThree = readline.question("What primitive data type represents an intentional absence of any value? ");

console.log("Your answer: ", answerThree);

let answerFour =  readline.question("What primitive data type represents the absence of a value that hasn't been assigned? ");

console.log("Your answer: ", answerFour);

let answerFive = readline.question("What do you use the modulus operator for? ");

console.log("Your answer: ",  answerFive);
