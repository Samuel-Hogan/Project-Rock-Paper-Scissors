let humanScore = 0;
let computerScore = 0;
let draw = 0;
function getComputerChoice() {
    let Choice = Math.floor(Math.random() * 3) + 1;
    if (Choice == 1) {
        return "rock";
    }else if (Choice == 2) {
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("", "rock");
    let toLow = choice.toLowerCase();
    console.log(toLow);
    return toLow;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        ++computerScore;
        console.log("Computer:" + " " + computerScore);
        
    }else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        ++humanScore;
        console.log("You:" + " " + humanScore);

    }else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        ++humanScore;
        console.log("You:" + " " + humanScore);

    }else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        ++computerScore;
        console.log("Computer:" + " " + computerScore);

    }else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        ++computerScore;
        console.log("Computer:" + " " + computerScore);

    }else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        ++humanScore;
        console.log("You:" + " " + humanScore);

    }else {
        ++draw;
        console.log("Draw! It's a Tie");
        console.log("Draw:" + " " + draw);
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log("You:" + " " + humanScore);
    console.log("Computer:" + " " + computerScore);
    console.log("Draw:" + " " + draw);
    if (humanScore > computerScore) {
        console.log("You Win!");
    }else if (humanScore < computerScore) {
        console.log("You Lose!");
    }else {
        console.log("Tie!")
    }
}

playGame();