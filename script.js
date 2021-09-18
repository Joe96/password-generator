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

    generatePassword: function() {
    console.log("Joel");
    finalPassWord.setPasswordLength();
    finalPassWord.setUppercase();
    finalPassWord.setLowercase();
    finalPassWord.setNumbers();
    finalPassWord.setSpecialChar();
  },

  setPasswordLength: function () {

    passwordLength = parseInt(prompt("How many character should the password have? : "));

    if(passwordLength <= 7) {
      console.log("Number to short, try again!")
    } 
    else if (passwordLength >= 129){
      console.log("Number to big, try again!")
    }
    else {
      console.log(passwordLength)
      return passwordLength;
    }

  },

  setUppercase: function () {
    hasUppercase = window.confirm("Should the password contain uppercase characters? ")

    if(hasUppercase === true){
      hasUppercase = true;
      console.log(hasUppercase)
    } else {
      hasUppercase = false;
      console.log(hasUppercase)
    }
    console.log("uppercase set.")
  },

  setLowercase: function () {
    hasLowercase = window.confirm("Should the password contain lowercase characters? ")

    if(hasLowercase === true){
      hasLowercase = true;
      console.log(hasLowercase)
    } else {
      hasLowercase = false;
      console.log(hasLowercase)
    }
    console.log("lowercase set.")
  },

  setNumbers: function () {
    hasNumbers = window.confirm("Should the password contain numbers characters? ")

    if(hasNumbers === true){
      hasNumbers = true;
      console.log(hasNumbers)
    } else {
      hasNumbers = false;
      console.log(hasNumbers)
    }
    console.log("number set.")
  },

  setSpecialChar: function () {
    hasSpecialChar = window.confirm("Should the password contain special characters? ")

    if(hasSpecialChar === true){
      hasSpecialChar = true;
      console.log(hasSpecialChar)
    } else {
      hasSpecialChar = false;
      console.log(hasSpecialChar)
    }
    console.log("special character set.")

  },

  displayPassword: function () {
    console.log(this.characters)
  }

}


// Write password to the #password input
function writePassword() {

  var password = finalPassWord.generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());