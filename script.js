'use strict';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const score0EL = document.querySelector('#score--0');
const currentEL0 = document.getElementById('current--0');

const player1EL = document.querySelector('.player--1');
const score1EL = document.getElementById('score--1');
const currentEL1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

// Function to switch players
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Initialize variables and UI
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  currentEL0.textContent = 0;
  currentEL1.textContent = 0;

  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player1EL.classList.remove('player--active');
  player0EL.classList.add('player--active');
  diceEl.classList.add('hidden');
};

init();

// Roll button event listener
btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold button event listener
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 200) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// New game button event listener
btnNew.addEventListener('click', init);

const diceRoll2 = Math.trunc(Math.random() * 6) + 1;
console.log(diceRoll2);
