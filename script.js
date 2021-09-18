// Assignment Code
// var generateBtn = document.querySelector("#generate");

// length lowercase, uppercase, numeric, and/or special characters
var finalPassWord = {
  passwordLength: 0,
  characters: "",
  hasUppercase: false,
  hasLowercase: false,
  hasNumbers: false,
  hasSpecialChar: false,

  setPasswordLength: function (number) {

    number = parseInt(prompt("How many character should the password have? : "));

    if(number <= 7) {
      console.log("Number to short, try again!")
    } 
    else if (number >= 129){
      console.log("Number to big, try again!")
    }
    else {
      this.passwordLength = number;
      console.log("Password length set.")
    }

  },

  setUppercase: function (isUppercase) {

    isUppercase = window.confirm("Should the password contain lowercase characters? ")
    this.hasUppercase = isUppercase;    
    console.log("uppercase set.")
  },

  setLowercase: function (isLowercase) {

    isLowercase = window.confirm("Should the password contain lowercase characters? ")
    this.hasLowercase = isLowercase;    
    console.log("lowercase set.")
  },

  setNumbers: function (isNumber) {

    isNumber = window.confirm("Should the password contain lowercase characters? ")
    this.hasNumbers = isNumber;    
    console.log("number set.")
  },

  setSpecialChar: function (isSpecialChar) {

    isSpecialChar = window.confirm("Should the password contain lowercase characters? ")
    this.hasSpecialChar = isSpecialChar;    
    console.log("special character set.")

  },
  
  displayPassword: function () {
    console.log(this.characters)
  } 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(password);
  console.log(finalPassWord.passwordLength);

  passwordText.value = password;
}

function generatePassword() {

  finalPassWord.setPasswordLength();
  console.log(finalPassWord.passwordLength)
  finalPassWord.setUppercase();
  console.log(finalPassWord.hasUppercase)
  finalPassWord.setLowercase();
  console.log(finalPassWord.hasLowercase)
  finalPassWord.setNumbers();
  console.log(finalPassWord.hasNumbers)
  finalPassWord.setSpecialChar();
  console.log(finalPassWord.hasSpecialChar)

  console.log("Hey Joel here's the final password ")
  console.log(finalPassWord)  

  assemblePassword();
}

function assemblePassword () {
  console.log("Generating Password...")
  for(var i= 0; i < finalPassWord.passwordLength; i++){

  }
}

// function generatePassword() {

//   var passwordLength = prompt("How much characters do you want you password to have? ")

//   if (passwordLength <= 7) {
//     console.log("Number to short, try again!")
//   } 
//   else if (passwordLength >= 129){
//     console.log("Number to big, try again!")
//   }
//   else {
//     isUppercase()
//   }
// }

// function isUppercase() {

//   var awnser = prompt("Do you want to use uppercase characters? ")

// }