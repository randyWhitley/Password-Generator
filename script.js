let generateBtn = document.querySelector("#generate");
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  document.getElementById("generate");
  const clipboard = document.getElementById("clipboard");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Global variables
//const numbers= ["0","1","2","3","4","5","6","7","8","9"];
//const uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//const specialcharaters= [ "!","#", "$","%","&","*","+","-",".", "/", ":", ";","<", "=",">", "?", "@","[","~"];
//let passwordLength = 25 ;
//for (let i=0; i < passwordlength - 3 ; i++ ){
//let randomNumber= Math.floor (Math.random () * chars.lenght);
//password +=chars.sustring (randomNumber, randomNumber+1);

//     }

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

const numberChoice = prompt("Pick a number between 8 and 128");
console.log(numberChoice);
const choiceuppercase = prompt("Do you want uppercase letters?");
console.log(choiceuppercase);
const choicelowercase = prompt("Do you want lowercase letters?");
console.log(choicelowercase);
const specialcharaters = prompt("Special Charaters?");
console.log(specialcharaters);
// Assignment Code
let allArays =
  (numberChoice, choiceuppercase, choicelowercase, specialcharaters);
console.log(allArays);

for (let i = 0; 1 < 10; i++) {
  //let num= Math.random()

  let minimumnumberChoice = "";
  let minimumchoi = "";
  let minimumUpperCases = "";
  let minimumSpecialCharacters = "";

  // Generator functions
  let functionArray = [
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    function getLowerCases() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    function getUpperCases() {
      return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    function getSpecialCharacters() {
      return specialCharacters(
        Math.floor(Math.random() * specialCharacters.length)
      );
    },
  ];

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray[1];
    minimumCount++;
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray[2];
    minimumCount++;
  }

  if (special === true) {
    minimumSpecialCharacters = functionArray[3];
    minimumCount++;
  }

  // empty string variable for the for loop below
  let randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < parseInt(passwordLength) - minimumCount; i++) {
    let randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked]();
  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  console.log(randomPasswordGenerated);
}
