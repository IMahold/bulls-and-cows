const guessNumber = (secret, guess) => {
  let bulls = 0;
  let cows = 0;
  let numbers = [];

  const checkNumbers = (num) => {
    if (numbers.length) {
      for (let i = 0; i < numbers.length; i++) {
        if (num === numbers[i]) {
          return false;
        } else {
          numbers.push(num);
          cows++;
          return true;
        }
      }
    } else {
      cows++;
      numbers.push(num);
    }
  };
  if (guess) {
    for (let k = 0; k < secret.length; k++) {
      if (secret[k] === guess[k]) {
        bulls++;
        numbers.push(guess[i]);
      } else {
        for (let l = 0; l < guess.length; l++) {
          if (secret[k] === guess[l]) checkNumbers(guess[l]);
        }
      }
    }
  }
  return `${bulls} bull and ${cows} cows`;
};

console.log(guessNumber(1234,1214));