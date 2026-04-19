console.log("We are playing Rock Paper Scissors");

function getCompputerChoice() {
    let computerChoice = "randomText";
    let controlNumber = 0;

    controlNumber = Math.floor(Math.random() * 10) % 3;

    switch (controlNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            console.log("Computer failed to make a choice");
    }

    console.log(computerChoice);
}

getCompputerChoice();