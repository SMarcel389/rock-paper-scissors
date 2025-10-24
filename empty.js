/*
getComputerChoice
randomly between rock paper scissors
use math.random: returns random number between 0 and 1. Scale that to the range between 0-2 - multiply by 3, round using math.floor

if r = 0, rock
r = 1 paper
r = 2 scissors

getPlayerChoice
playGame
*/
let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let r = Math.floor(Math.random() * 3);
    if (r === 0) {
        return "rock"
    }
    else if (r === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}



function getPlayerChoice() {
    while (true) {
        const choice = prompt("Rock, paper, or scissors?", "Choose your weapon").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        alert("invalid choice");
    }
}

function playRound() {

    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log("Player: " + playerChoice + "     Computer: " + computerChoice);

    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Draw! ");
        }
        else if (computerChoice === "paper") {
            computerScore ++;
            console.log("You lose! Rock loses to paper! ");
        }
        else {
            playerScore ++;
            console.log("You win! Rock smashes scissors! ")
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            playerScore ++;
            console.log("You win! Paper beats rock!");
        }
        else if (computerChoice === "paper") {
            
            console.log("Draw!");
        }
        else {
            computerScore ++;
            console.log("You lose! Paper gets cut by scissors");
        }
    }
    else {
        if (computerChoice === "paper") {
            playerScore ++;
            console.log("You win! Scissors cut paper!");
        }
        else if (computerChoice === "scissors") {
            console.log("Draw!");
        }
        else {
            computerScore ++;
            console.log("You lose! Scissors get smashed by rock");
        }
    }
}

function playGame() {
    let rounds = 1
    while (playerScore < 3 && computerScore < 3) {
        console.log("Round " + rounds);
        playRound();
        rounds++;
        console.log("Score: " + playerScore + " : " + computerScore);
        

    }

    console.log("Final score: " + playerScore + " : " + computerScore);
    if (playerScore > computerScore) {
        console.log("PLAYER WINS!");
    }
    else {
        console.log("Computer wins :(");
    }

}

playGame();