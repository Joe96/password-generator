// Assignment Code
var passwordLength = 0;
isUppercase = false;
isLowercase = false;
isNumeric = false;
isSpecialChar = false;
isUppercase = false;


// length lowercase, uppercase, numeric, and/or special characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLength = prompt("How much characters do you want you password to have? ")

  if (passwordLength <= 7) {
    console.log("Number to short, try again!")
  } else if (passwordLength >= 129){
    console.log("Number to big, try again!")
  }

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());