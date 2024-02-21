function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return "you win"
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'rock' && computerSelection === 'paper')
    ) {
        return "you lose"
    } else {
        return "it's a tie"
    }
}

function playGame() {
    let playerLives = 5;
    let computerLives = 5;

    while (playerLives > 0 && computerLives > 0) {
        let playerChoice = prompt("Rock, Paper, Scissors?:");
        let computerChoice = getComputerChoice();
        
        console.log("You chose: " + playerChoice);
        console.log("Computer chose: " + computerChoice);
        
        let result = playRound(playerChoice.toLowerCase(), computerChoice);
        console.log(result);

        if (result === "you win") {
            computerLives--;
        } else if (result === "you lose") {
            playerLives--;
        }
    }

    console.log("Player lives: " + playerLives);
    console.log("Computer lives: " + computerLives);

    if (playerLives > computerLives) {
        console.log("Congratulations! You win the game!");
    } else if (playerLives < computerLives) {
        console.log("Sorry, you lose the game. Better luck next time!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();