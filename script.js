let playerLives = 5;
        let computerLives = 5;
        let gameOver = false;

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
            if (gameOver) {
                return;
            }

            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
            document.getElementById('result').textContent = result;
            if (result === "You win") {
                computerLives--;
            } else if (result === "You lose") {
                playerLives--;
            }

            updateLives();

            if (playerLives === 0 || computerLives === 0) {
                endGame();
            }
        }

        function endGame() {
            gameOver = true;
            if (playerLives === 0) {
                document.getElementById('result').textContent = "Game Over - You Lost!";
            } else if (computerLives === 0) {
                document.getElementById('result').textContent = "Congratulations! You Won!";
            }
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
            document.getElementById('restart').style.display = 'block';
        }

        function restartGame() {
            playerLives = 5;
            computerLives = 5;
            gameOver = false;
            updateLives();
            document.getElementById('result').textContent = "Choose your move:";
            document.getElementById('rock').disabled = false;
            document.getElementById('paper').disabled = false;
            document.getElementById('scissors').disabled = false;
            document.getElementById('restart').style.display = 'none';
        }

        let btn1 = document.querySelector('#rock');
        let btn2 = document.querySelector('#paper');
        let btn3 = document.querySelector('#scissors');
        let restartBtn = document.querySelector('#restart');

        btn1.addEventListener('click', () => handlePlayerChoice('rock'));
        btn2.addEventListener('click', () => handlePlayerChoice('paper'));
        btn3.addEventListener('click', () => handlePlayerChoice('scissors'));
        restartBtn.addEventListener('click', restartGame);

        updateLives();