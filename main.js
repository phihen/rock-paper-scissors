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

function getHumanChoice() {
    let humanChoice = prompt("0 - rock\n1 - paper\n2 - scissors\nPlease insert your choice:");
    switch (humanChoice) {
        case "0":
            return "rock";
            break;
        case "1":
            return "paper";
            break;
        case "2":
            return "scissors";
            break;
    }
}