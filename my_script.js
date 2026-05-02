let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerChoice = "";
let humanChoice = "";

const container = document.querySelector("#container");
const roundResult = document.createElement("p");

function buttonClicked(str) {
    if (roundNumber <= 5) {
        playRound(str);

        const roundNum = document.createElement("p");
        roundNum.textContent = "Round Number: " + roundNumber;
        container.appendChild(roundNum);

        const compChoice = document.createElement("p");
        compChoice.textContent = "Computer chose: " + computerChoice;
        container.appendChild(compChoice);

        const humanChoiceElem = document.createElement("p");
        humanChoiceElem.textContent = "You chose: " + humanChoice;
        container.appendChild(humanChoiceElem);

        container.appendChild(roundResult);
    }

    else { console.log("5 rounds played"); }

    if (roundNumber === 5) {
        const gameScore = document.createElement("h3");
        gameScore.textContent = "Total score - Computer: " + computerScore + "You: " + humanScore;
        container.appendChild(gameScore);

        const gameResult = document.createElement("h2");

        if (computerScore === humanScore) {
            gameResult.textContent = "It is a tie!";
        }
        else if (computerScore < humanScore) {
            gameResult.textContent = "You win the game!";
        }
        else {
            gameResult.textContent = "Computer wins the game!";
        }
        container.appendChild(gameResult);
    }
    roundNumber++;
}


const rock = document.querySelector("#buttonRock");
rock.addEventListener("click", () => buttonClicked("rock"));

const paper = document.querySelector("#buttonPaper");
paper.addEventListener("click", () => buttonClicked("paper"));

const scissors = document.querySelector("#buttonScissors");
scissors.addEventListener("click", () => buttonClicked("scissors"));



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

function playRound(hChoice) {
    let cChoice = getCompputerChoice();
    computerChoice = cChoice;
    humanChoice = hChoice;

    if (cChoice === hChoice) {
        roundResult.textContent = "This round is a tie!";
    }
    else if (cChoice === "rock" && hChoice == "paper") {
        roundResult.textContent = "You win this round!";
        humanScore++;
    }
    else if (cChoice === "paper" && hChoice == "scissors") {
        roundResult.textContent = "You win this round!";
        humanScore++;
    }
    else if (cChoice === "scissors" && hChoice == "rock") {
        roundResult.textContent = "You win this round!";
        humanScore++;
    }
    else {
        roundResult.textContent = "Computer wins this round!";
        computerScore++;
    }
}