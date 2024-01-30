// Basic idea: computer vs user in rock paper scissors
// A function has to be called to start the game
// Once called user input is asked for (rock, paper scissors)
// Computer chooses randomly between (rock, paper, scissors)
// Once game is finished, the outcome should be stated in a string (either, you win, you lose, or it's a tie)

// Pseudocode
// Create a variable that stores user input
// Create a variable that makes user input case-insensitive
// Create a list/array containing rock, paper, scissors
// Create a function that randomly chooses rock, paper, scissors
// Create a function that decides if it is a win lose or tie
// Create a function that starts the game, asks for user input, and goes through the game till the end

// Create a variable that stores user input
let input = prompt("Choose Rock, Paper, or Scissors");

// Create a variable that makes user input case-insensitive
let player_input = input.toLowerCase();

// Create a list/array containing rock, paper, scissors
const choice = ["rock", "paper", "scissors"]

// Create a function that randomly chooses rock, paper, scissors
function getComputerChoice(){
    let computer_choice = choice[Math.floor(Math.random()*choice.length)];
    return computer_choice;
}

console.log(getComputerChoice())