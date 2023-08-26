"use strict";

// DOM Elements
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");

// Initial starting screen state
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add("hidden");
