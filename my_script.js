console.log("We are playing Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

function getCompputerChoice() {
    let computerChoice = "randomText";
    let controlNumber = 0;

    controlNumber = Math.floor(Math.random() * 10) % 3;

    switch (controlNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.log("Computer failed to make a choice");
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice");
    return humanChoice.toLowerCase();
}

function playRound(cChoice, hChoice) {
    cChoice = getCompputerChoice();
    hChoice = getHumanChoice();

    console.log("Round: " + roundNumber);
    console.log("Computer: " + cChoice);
    console.log("Human: " + hChoice);

    if (cChoice === hChoice) {
        console.log("This round is a tie!");
    }
    else if (cChoice === "rock" && hChoice == "paper") {
        console.log("Human wins this round!");
        humanScore++;
    }
    else if (cChoice === "paper" && hChoice == "scissors") {
        console.log("Human wins this round!");
        humanScore++;
    }
    else if (cChoice === "scissors" && hChoice == "rock") {
        console.log("Human wins this round!");
        humanScore++;
    }
    else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}

function playGame() {
    while (roundNumber <= 5) {
        playRound();
        if (roundNumber === 5) {
            console.log("Total score - Computer: " + computerScore + " Human: " + humanScore);
            if (computerScore === humanScore) {
                console.log("It is a tie!")
            }
            else if (computerScore > humanScore) {
                console.log("Human wins the game!")
            }
            else {
                console.log("Computer wins the game!")

            }
        }
        roundNumber++;
    }

}

playGame();