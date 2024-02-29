let playerLives = 5;
let computerLives = 5;

function updateLives() {
    document.getElementById('player-lives').textContent = `Player Lives: ${playerLives}`;
    document.getElementById('computer-lives').textContent = `Computer Lives: ${computerLives}`;
}

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
        return "You win";
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'rock' && computerSelection === 'paper')
    ) {
        return "You lose";
    } else {
        return "It's a tie";
    }
}

function handlePlayerChoice(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;
    if (result === "You win") {
        computerLives--;
    } else if (result === "You lose") {
        playerLives--;
    }

    updateLives();
}

let btn1 = document.querySelector('#rock');
let btn2 = document.querySelector('#paper');
let btn3 = document.querySelector('#scissors');

btn1.addEventListener('click', () => handlePlayerChoice('rock'));
btn2.addEventListener('click', () => handlePlayerChoice('paper'));
btn3.addEventListener('click', () => handlePlayerChoice('scissors'));

updateLives();
