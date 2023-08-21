// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //setting length
  var minLength = 0;
  var maxLength = 0;
  var input = 0;
  while(minLength == 0 && maxLength == 0){
    //while() insures a valid number for each
    while(minLength == 0){
      input = prompt("Enter a minimum length (Valid input is a number between 1 and 999)");
      if(input > 0 && input < 100){
        minLength = input;
        input = 0;
      }
    }
    while(maxLength == 0){
      input = prompt("Enter a maximum length (Valid input is a number between your minimum length and 999)");
      if(input > minLength - 1 && input < 999){
        maxLength = input;
        input = 0;
      }
    }
    if(confirm(`Looks like you selected ${minLength} for the minimum length, and ${maxLength} for the maximum length. If you would like to continue hit ok, to reset these values hit cancel.`) == false){
      minLength = 0;
      maxLength = 0;
    }
  }
  //setting character preferences
  var lowCase = false;
  var upCase = false;
  var numCase = false;
  var speCase = false;
  //all four options will be looped through and repeated whenever none are selected
  while(!(lowCase) && !(upCase) && !(numCase) && !(speCase)){
    lowCase = confirm("Do you want to include lower case in your password? If yes press ok, cancel for no. (At least one of these four options must be selected)");
    upCase = confirm("Do you want to include upper case in your password? If yes press ok, cancel for no. (At least one of these four options must be selected)");
    numCase = confirm("Do you want to include numbers in your password? If yes press ok, cancel for no. (At least one of these four options must be selected)");
    speCase = confirm("Do you want to include special characters in your password? If yes press ok, cancel for no. (At least one of these four options must be selected)");

    if(!(lowCase) && !(upCase) && !(numCase) && !(speCase)){
      alert("One of the four options must be selected.");
    }
    else{
      if(confirm(`Looks like you selected ${lowCase} for lower case characters, ${upCase} for upper case characters, ${numCase} for numbers, and ${speCase} for special characters. If you would like to continue hit ok to reset these values hit cancel.`) == false){
        lowCase = false;
        upCase = false;
        numCase = false;
        speCase = false;
      }
    }
  }

  //getting the random length between max and min
  passLength = Math.floor((Math.random() * (maxLength - minLength)) + minLength);
  // console.log(passLength); //(test)

  //getting the total available characters
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"];
  var passCharacters = [];
  if(lowCase){
    passCharacters = passCharacters.concat(lowerCaseAlphabet);
  }
  if(upCase){
    passCharacters = passCharacters.concat(upperCaseAlphabet);
  }
  if(numCase){
    passCharacters = passCharacters.concat(numberList);
  }
  if(speCase){
    passCharacters = passCharacters.concat(specialCharacters);
  }
  // console.log(passCharacters); //(test)

  //password generation
  var password = "";
  for(var i = 0; i < passLength; i++){
    password = password + passCharacters[Math.floor(Math.random() * passCharacters.length)];
  }

  // console.log(password); //(test)
  return password;
}