"use strict";

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
        default:
            return "rock";
    }
}

//Prompts the user for his choice and return it
function getHumanChoice() {
    let humanChoice = prompt("- rock\n- paper\n- scissors\nPlease insert your choice:").toString().toLowerCase();
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
    console.log("Your choice: "+humanChoice+"\nComputer choice: "+computerChoice);

    if(humanChoice === computerChoice) {
        console.log("It's a draw!");
        return "draw";
    }

    if((humanChoice === "rock" && computerChoice === "paper") 
        || (humanChoice === "paper" && computerChoice === "scissors") 
        || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log("You lose! "+computerChoice+" beats "+humanChoice);
        return "humanLose";
    }
    
    console.log("You Win! "+humanChoice+" beats "+computerChoice);
    return "humanWin";
}

function playgame() {
    let humanScore = 0;
    let computerScore = 0;
    let result = "";

    for(let i = 0; i < 5; i++) {
        result = playRound(getHumanChoice(), getComputerChoice());

        if(result === "humanWin"){
            humanScore++;
        }
        else if(result === "humanLose") {
            computerScore++;
        }
    }

    console.log("Your Wins: "+humanScore+"\nComputer Wins: "+computerScore);

    if(humanScore > computerScore) {
        console.log("Hurray! You beat the computer :D");
    }
    else if(humanScore < computerScore) {
        console.log("Oh no! You lost against the computer :(");
    }
    else {
        console.log("It's a draw! How boring :/");
    }

}