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
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add("hidden");

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
  } else {
    currentScore += diceValue;
    current0.textContent = currentScore;
  }
});
