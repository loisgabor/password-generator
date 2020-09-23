// Defining the variables
const symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var lower = "abcsdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var possibleCharacters = "";
var password = "";
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// User input prompts
function writePassword() {
  characterAmount = prompt(
    "Select the number of characters desired for your password (between 8 and 128)"
  );
  if (characterAmount < 8 || characterAmount > 128) {
    alert("Number of characters needs to be between 8 and 128");
    return writePassword();
  }
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
  if (
    includeUppercase === false &&
    includeLowercase === false &&
    includeNumbers === false &&
    includeSymbols === false
  ) {
    alert(
      "Cannot generate password. Please select possible characters to generate password"
    );
    writePassword();
  }

  // Password Generator section
  if (includeUppercase) {
    possibleCharacters += upper;
  }
  if (includeLowercase) {
    possibleCharacters += lower;
  }
  if (includeNumbers) {
    possibleCharacters += number;
  }
  if (includeSymbols) {
    possibleCharacters += symbols;
  }
  for (var i = 0; i < characterAmount; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  passwordText.value = password;
}

// Generate event listener
generateBtn.addEventListener("click", writePassword);
