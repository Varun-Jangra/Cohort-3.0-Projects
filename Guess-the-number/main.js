let randNum = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const userGuess = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a vlaid number");
  } else if (guess < 1) {
    alert("Please enter a vlaid number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      guessDisplay(guess);
      displayMessage(`Game Over. Random Number was ${randNum}`);
      endGame();
    } else {
      guessDisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randNum) {
    displayMessage(`You Guessed it right`);
    endGame();
  } else if (guess < randNum) {
    displayMessage(`Number is Too low`);
  } else if (guess > randNum) {
    displayMessage(`Number is Too High`);
  }
}

function guessDisplay(guess) {
  userInput.value = "";
  userGuess.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randNum = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userGuess.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute(`disabled`);
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
