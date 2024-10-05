"use strict";

const newGameBtn = document.querySelector(".new-game");

const rollDiceBtn = document.querySelector(".roll-dice");

const holdButton = document.querySelector(".hold");

const scoreHolder1 = document.querySelector(".hold-score-0");
const scoreHolder2 = document.querySelector(".hold-score-1");

const currentScoreHolder1 = document.querySelector(".current-score-0");
const currentScoreHolder2 = document.querySelector(".current-score-1");

const newGameButton = document.querySelector(".new-game");

const diceImage = document.querySelector(".dice");
const winnerDisplay = document.querySelector(".winner");

let randomNumber;
let currentScored = 0;
let activePlayer = 0;
let holded = [0, 0];

const switchPlayer = function () {
  holded[activePlayer] += currentScored;
  console.log(holded);

  if (holded[activePlayer] >= 50) {
    document.querySelector(".winner").textContent = `Player ${
      activePlayer + 1
    } is the winner`;

    winnerDisplay.classList.remove("hidden");
  }
  document.querySelector(`.hold-score-${activePlayer}`).textContent =
    holded[activePlayer];
  document.querySelector(`.current-score-${activePlayer}`).textContent = 0;

  currentScored = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

rollDiceBtn.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    currentScored += randomNumber;

    diceImage.classList.remove("hidden");

    document.querySelector(`.current-score-${activePlayer}`).textContent =
      currentScored;
  } else {
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;

    currentScored = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

holdButton.addEventListener("click", function () {
  switchPlayer();
});

newGameBtn.addEventListener("click", function () {
  holded = [0, 0];
  currentScored = 0;
  activePlayer = 0;

  currentScoreHolder1.textContent = 0;
  currentScoreHolder2.textContent = 0;
  scoreHolder1.textContent = 0;
  scoreHolder2.textContent = 0;
  diceImage.classList.add("hidden");
  winnerDisplay.classList.add("hidden");
});
