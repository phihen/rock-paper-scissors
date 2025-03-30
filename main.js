"use strict";

let humanScore = 0;
let computerScore = 0;

//Returns the choice of the Computer
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

//Prompts the user for his choice and return it
function getHumanChoice() {
    let humanChoice = prompt("- rock\n- paper\n- scissors\nPlease insert your choice:").toLowerCase();
    switch (humanChoice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            console.log("Your entered choice does not exist. Rock was set as your choice.")
            return "rock";
    }
}

// Determines the winner of one round
function playRound(humanChoice, computerChoice) {
    console.log("Your choice: "+humanChoice);
    console.log("Computer choice: "+computerChoice);

    if(humanChoice === computerChoice) {
        console.log("It's a draw!");
    } 
    else {
        if (humanChoice === "rock") {
            if(computerChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            }
            
            if(computerChoice === "scissors") {
                console.log("You Win! Rock beats Scissors");
                humanScore++;
            }
        }

        if(humanChoice === "paper") {
            if(computerChoice === "rock") {
                console.log("You Win! Paper beats Rock");
                humanScore++;
            }
            
            if(computerChoice === "scissors") {
                console.log("You Lose! Scissors beats Paper");
                computerScore++;
            }
        }

        if(humanChoice === "scissors") {
            if(computerChoice === "rock") {
                console.log("You Lose! Rock beats Scissors");
                computerScore++;
            }

            if(computerChoice === "paper") {
                console.log("You Win! Scissors beats Paper");
                humanScore++;
            }
        }
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);