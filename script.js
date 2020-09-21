// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var characterAmount = prompt(
    "Select the number of characters desired for your password (between 8 and 128)"
  );
  var includeUppercase = confirm(
    "Would you like to include uppercase in your password?"
  );
  var includeLowercase = confirm(
    "Would you like to include lowercase in your password?"
  );
  var includeNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  var includeSymbols = confirm(
    "Would you like to include symbols in your password?"
  );
  console.log(characterAmount);
}

// DOM elements

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomNumber,
// };

// function generatePassword(lower, upper, number, symbol, length) {}

// const typeCount = lower + upper + number + symbol;

//   var password = generatePassword(
//     characterAmount,
//     includeUppercase,
//     includeLowercase,
//     includeNumbers,
//     includeSymbols
//   );
var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
