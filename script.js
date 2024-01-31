// Basic idea: computer vs user in rock paper scissors
// A function has to be called to start the game
// Once called user input is asked for (rock, paper scissors)
// Computer chooses randomly between (rock, paper, scissors)
// Once game is finished, the outcome should be stated in a string (either, you win, you lose, or it's a tie)

// Pseudocode
// @Create a function that asks for user input
// @Create a list/array containing rock, paper, scissors
// @Create a function that randomly chooses rock, paper, scissors
// @Create a function that decides if it is a win lose or tie
// @Create a function that starts the game, asks for user input, and goes through the game till the end
// @Create a function that plays the game 5 times, and keeps count of how many
// times the computer won, vs how many you won and says who won at the end
// @Create a counter variable for player
// @Create a counter variable for computer




// Create a function that asks for user input
function getInput(){
    let input = prompt("Choose Rock, Paper, or Scissors");
    let player_input = input ? input.toLowerCase() : null;
    return player_input;
}

// Create a list/array containing rock, paper, scissors
const choice = ["rock", "paper", "scissors"]

// Create a function that randomly chooses rock, paper, scissors
function getComputerChoice(){
    let computer_choice = choice[Math.floor(Math.random()*choice.length)];
    return computer_choice;
}

// Create a function that decides if it is a win, lose or tie
function getOutcome(player_input,computer_choice){
    if (!player_input){
        return "Invalid input, try again"
    }
    else if (player_input == computer_choice){
        return "Tie";}
    else if (
        (player_input == "rock" && computer_choice == "paper")||
        (player_input == "paper" && computer_choice == "scissors")||
        (player_input == "scissors" && computer_choice == "rock")
    ){
        return "Lose";}
    else {
        return "Win"
    }
}

// Create a counter variable for player + computer
let winPlayer = 0
let winComputer = 0

// Create a function that starts the game, asks for user input, and goes through the game
function startGame(player_selection,computer_selection){
    let player_input = getInput();
    let computer_choice = getComputerChoice();
    let outcome = getOutcome(player_input,computer_choice);
    console.log(`Player chose: ${player_input}`);
    console.log(`Computer chose: ${computer_choice}`);
    console.log(`You ${outcome}`);
    
    if (outcome == "Tie"){
        console.log(`You have tied, the score is Player: ${winPlayer} | Computer: ${winComputer}`)
    } else if(outcome == "Win"){
    winPlayer++;
    } else{
        winComputer++;
    }

    console.log(`The score is Player: ${winPlayer} | Computer: ${winComputer}`)
    return{winPlayer,winComputer};
}

startGame();
startGame();
startGame();
startGame();
startGame();