const genButton = document.querySelector("#generate");
const passwordText = document.querySelector("#password");


//Write password to the #password input
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lower = "abcdefghijklmnopqrstuvwxyz".split("");
let numericChar= "1234567890".split("");
let specialChar= "~!@#$%^&*()_+".split("");


  function getPasswordInputs(){
    let passwordLength = prompt("How many characters between 8 - 128 do you want in your password?");
    passwordLength = parseInt(passwordLength);

    if (isNaN(passwordLength) === true) {
      alert ("Password length must be a number.");
      return undefined;
    };

    if (passwordLength < 8){
      alert ("Password length must be at least 8 characters long.");
      return undefined;
    };

    if (passwordLength > 128){
      alert ("Password length must be equal to or less than 128.");
      return undefined;
    };

    let lowerCase = confirm ("Do you want lowercase letters in your password?");
    let upperCase = confirm ("Do you want uppercase letters in your password?");
    let numbers = confirm ("Do you want numbers in your password?");
    let specialCharacters = confirm ("Do you want special characters in your password?");

    if (lowerCase === false && 
        upperCase === false &&
        numbers === false &&
        specialCharacters === false) {
          alert ("At least one character type must be selected");
          return undefined;
    };

    return{
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numbers: numbers,
    specialCharacters: specialCharacters
    };
  };

 function getRandomPassword(array) {
    let randomIndex = Math.floor(Math.random()* array.length);
    let randomCharacter = array[randomIndex];
      return randomCharacter;
  };

  genButton.addEventListener("click",function() {
    let options = getPasswordInputs();
    let result = [];
    let pickedCharacters = [];
    let guaranteedCharacters = [];
    // loop getting random characters
      if (options === undefined) {
        return;
      };
      if (options.lowerCase === true) {
        pickedCharacters = pickedCharacters.concat(lower);
        let randomCharacter = getRandomPassword(lower);
        guaranteedCharacters.push(randomCharacter);
      };

      if (options.upperCase === true) {
        pickedCharacters = pickedCharacters.concat(upper);
        let randomCharacter = getRandomPassword(upper);
        guaranteedCharacters.push(randomCharacter);
      };

      if (options.numbers === true) {
        pickedCharacters = pickedCharacters.concat(numericChar);
        let randomCharacter = getRandomPassword(numericChar);
        guaranteedCharacters.push(randomCharacter);
      };

      if (options.specialCharacters === true) {
        pickedCharacters = pickedCharacters.concat(specialChar);
        let randomCharacter = getRandomPassword(specialChar);
        guaranteedCharacters.push(randomCharacter);
      };
    
      for(let i = 0; i < options.passwordLength; i++) {
          let randomCharacter = getRandomPassword(pickedCharacters);
          result.push(randomCharacter);
      };

      for (let j = 0; j < guaranteedCharacters.length; j++) {
          result[j] = guaranteedCharacters[j];
      }

      result = result.join("");

      passwordText.value = result;

  });
