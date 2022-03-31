// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
// const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working


let btn1 = document.getElementById('btn')
btn1.addEventListener('click' , () => {
  
  let name = prompt('What is your name? ');
  console.log(`User's input is: ${name}`);
})

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something

// const ps = require('promt-sync')
// const promt = ps();

// let name = promt('Enter your name')

function main() {
  let len = prompt(
    "Choose the level of difficulty you want the game to be. Choose a number 1-9"
  );
  playBullsAndCows(len);
}

function playBullsAndCows(len) {
  let num = pickNum(len);
  console.log(`The secret number is:  \n ${num.join("\n")}`);

  showInstructions(len);
  let numGuess = 0;
  while (true) {
    numGuess++;
    let guess = getGuess(numGuess, len);
    let counter = countBovine(num, guess);
    showScore(counter.bulls, counter.cows);
    if (counter.length == len) {
      showResult(numGuess);
      return;
    }
  }
}

// playBullsAndCows();

function countBovine(num, guess) {
  let count = { bulls: 0, cows: 0 };
  let noIdea = guess.join("");
  for (let i = 0; i < num.length; i++) {
    let randomValue = noIdea.search(num[i] != -1);
    if (num[i] == guess[i]) count.bulls++;
    else if (randomValue) count.cows++;
  }
  return count;
}

function getGuess(numGuess, len) {
  while (true) {
    console.log(`Your guess # ${numGuess}:`);
    let guess = prompt();
    guess = String(parseInt(guess)).split("");
    if (guess.length != len) {
      console.log(`You must enter a ${len} digit number.`);
      continue;
    }
    if (duplicates(guess)) {
      console.log(`No digits can be dupicated`);
      continue;
    }
    return guess;
  }
}

function duplicates(ary) {
  let randomZ = ary.concat().sort();
  for (let i = i; i < randomZ.length; i++) {
    if (randomZ[i] == randomZ[i - 1]) return true;
  }

  return false;
}

function showScore(numBulls, numCows) {
  console.log(`Bulls: ${numBulls}, cows: ${numCows}`);
}

function pickNum(len) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  nums.sort(() => Math.random() - 0.5);
  return nums.slice(0, len);
}

function showInstructions(len) {
  console.log();
  console.log("Bulls and Cows game");
  console.log("-------------------");
  console.log(`You must guess the ${len}' digit number I am thinking of.`);
  console.log("The number is composed of the digits 0-9.");
  console.log("No digit appears more than once.");
  console.log("After each of your guesses, I will tell you:");
  console.log("The number of bulls (digits in right place)");
  console.log("The number of cows (correct digits, but in the wrong place)");
  console.log();
}

// showInstructions();

main();

// const getHint = function (secret, guess) {
//     let bulls = 0;
//     let cows = 0;
//     let nums = [];
//     const checkNums = function (num) {
//       if (nums.length) {
//         for (let l = 0; l < nums.length; l++) {
//           if (num === nums[l]) {
//             return false;
//           } else {
//             nums.push(num);
//             cows++;
//             return true;
//           }
//         }
//       } else {
//         // /nums/ is equal to 0
//         cows++;
//         nums.push(num);
//       }
//     };
//     if (guess) {
//       // iterate over the secret to compare it to the guess
//       for (let i = 0; i < secret.length; i++) {
//         // compare the related location to check for bulls
//         if (secret[i] === guess[i]) {
//           bulls++;
//           nums.push(guess[i]);
//         } else {
//           // We didnt find a bull, lets check the /guess/ for cows
//           for (let j = 0; j < guess.length; j++) {
//             // We have a match, what should we do with it?
//             if (secret[i] === guess[j]) {
//               checkNums(guess[j]);
//             }
//           }
//         }
//       }
//     }
//     //return bulls + "A" + cows + "B";
//     return `${bulls} bull and ${cows} cows`
//   };
//   console.log(getHint("1112", "1280"));
