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

// Initial starting screen state
diceImg.classList.add("hidden");
score0.textContent = 0;
score1.textContent = 0;
const scores = [0, 0];
let currentPlayer = 0;

// Score values
let currentScore = 0;

// Roll the dice
btnRollDice.addEventListener("click", () => {
  // Generate a random dice number (1 - 6)
  const diceValue = Math.trunc(Math.random() * 6) + 1;

  // Display the dice on the screen
  diceImg.classList.remove("hidden");
  diceImg.src = `dice-${diceValue}.png`;

  // Switch to the next player if the dice value is 1
  if (diceValue === 1) {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  } else {
    // Setting the
    currentScore += diceValue;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  }
});
