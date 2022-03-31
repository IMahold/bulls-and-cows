// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
// const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working

let playButton = document.getElementById("play-button");
// btn1.addEventListener('click' , () => {
console.log(playButton);
let numberGuesses = 0
let number = null;

const generateNum = () => {
  let emptyArr = [];

  while (emptyArr.length < 4) {
    let digit = Math.floor(Math.random() * 10);
    if (!emptyArr.includes(digit)) emptyArr.push(digit);
  }
  return emptyArr.join("");

  // for(let i = 0; i < 4; i = emptyArr.length){
  //   let digit = Math.floor(Math.random() * 10)
  //   if(!emptyArr.includes(digit)) emptyArr.push(digit)
  // }
};



const getGuessedNum = () => {
  let guessed = document.getElementById("type-text").value;
  if (guessed.length === 4 && hasOnlyUniqueDigits(guessed)) return guessed;
  else {
    return null;
  }
};

function hasOnlyUniqueDigits(str) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < str.length; i++) {
    if (!numbers.includes(str[i])) return false;
    let n = numbers.indexOf(str[i]);
    numbers.splice(n, 1);
  }
  return true;
}

function displayMessage(str) {
  let message = document.getElementById("paragraph");
  message.innerText = str;
}

function getBulls(guess, number) {
  let bulls = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === number[i]) {
      bulls++;
    }
  }

  return bulls;
}

function getCows(guess, number) {
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (number.includes(guess[i]) && guess[i] !== number[i]) {
      cows++;
    }
  }
  return cows;
}

let form = document.getElementById("id-form");
console.log(form);
form.onsubmit = function (event) {
  event.preventDefault();
  const guessed = getGuessedNum();
  if (guessed != null) {
    numberGuesses++
    const bulls = getBulls(guessed,number)
    const cows = getCows(guessed,number)
    if(bulls === 4)
    displayMessage(`You win !!! Congratulations) Number of guesses:${numberGuesses}`)
    else {
      displayMessage(`There are ${bulls} bulls and ${cows} cows. Number of guesses:${numberGuesses}`)
    }
    


  } else {
    displayMessage("Please use a 4 uniques digits number");

  }
  // console.log(guessed);

  // console.log('Hello World !!!!!!!');
};

playButton.onclick = function () {
  let gameInterface = document.getElementById("game-interface");
  gameInterface.style = "display: block;";
  console.log(gameInterface.style);
  number = generateNum();
  console.log(number);
  numberGuesses = 0
  document.getElementById("type-text").value = ''

  

  // console.log('Hello word');
};

