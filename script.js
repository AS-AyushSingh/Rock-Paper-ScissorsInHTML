let games = 0;
let won = 0;
let lost = 0;
let tie = 0;

const gameResult = document.getElementById("gameResult");
const score = document.getElementById("score");
const resetBtn = document.getElementById("resetBtn");

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
    choice.addEventListener("click", function() {
        const userChoice = this.id;
        const compChoice = getComputerChoice();
        const result = getResult(userChoice, compChoice);

        updateScores(result);
        displayResult(result, compChoice);
        games++;
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "tie";
    }

    if ((userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')) {
        return "win";
    } else {
        return "lose";
    }
}

function updateScores(result) {
    if (result === "win") {
        won++;
    } else if (result === "lose") {
        lost++;
    } else {
        tie++;
    }

    score.textContent = `Games Played: ${games} | Wins: ${won} | Losses: ${lost} | Ties: ${tie}`;
}

function displayResult(result, compChoice) {
    if (result === "win") {
        gameResult.textContent = `You won! The computer chose ${compChoice}.`;
    } else if (result === "lose") {
        gameResult.textContent = `You lost! The computer chose ${compChoice}.`;
    } else {
        gameResult.textContent = `It's a tie! Both chose ${compChoice}.`;
    }
}

resetBtn.addEventListener("click", function() {
    games = 0;
    won = 0;
    lost = 0;
    tie = 0;
    score.textContent = "";
    gameResult.textContent = "";
});
