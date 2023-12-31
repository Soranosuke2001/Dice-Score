"use strict";

// DOM Elements
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");

const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHoldScore = document.querySelector(".btn--hold");

const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// Initial starting screen state
diceImg.classList.add("hidden");
let scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
let currentPlayer = 0;
let gameStatus = true;

// Score values
let currentScore = 0;

// Switch player function
const switchPlayer = () => {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// Reset the current score
const resetCurrentScore = () => {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
};

// Roll the dice
btnRollDice.addEventListener("click", () => {
  if (gameStatus) {
    // Generate a random dice number (1 - 6)
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    // Display the dice on the screen
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${diceValue}.png`;

    // Switch to the next player if the dice value is 1
    if (diceValue === 1) {
      // Resetting the current score
      resetCurrentScore();

      // Switching the current player
      switchPlayer();
    } else {
      // Setting the new current score value
      currentScore += diceValue;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    }
  }
});

// Save the score and switch players or win the game
btnHoldScore.addEventListener("click", () => {
  if (gameStatus) {
    // Save the current score to the current players score
    scores[currentPlayer] += currentScore;

    // Changing the score that is displayed on the screen
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    // Reset the current score
    resetCurrentScore();

    // Check if the player won the game
    if (scores[currentPlayer] >= 100) {
      gameStatus = false;
      diceImg.classList.add("hidden");

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch players
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener("click", () => {
  // Reset all to initial state
  diceImg.classList.add("hidden");
  scores = [0, 0];
  currentPlayer = 0;
  currentScore = 0;
  gameStatus = true;
  
  score0.textContent = 0;
  score1.textContent = 0;
  
  current0.textContent = 0;
  current1.textContent = 0;

  // Reset all styling
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  
  player0.classList.add("player--active");
  player1.classList.remove("player--active");

});
