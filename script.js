// Assignment Code.

// finalPassWord object.
var finalPassWord = {
  // Length lowercase, uppercase, numeric, and/or special characters variables.
  passwordLength: 0,
  characters: "",
  hasUppercase: false,
  hasLowercase: false,
  hasNumbers: false,
  hasSpecialChar: false,

  // Method used to set password object's password length.
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

  // Method used to set if password object can use uppercase.
  setUppercase: function (isUppercase) {

    isUppercase = window.confirm("Should the password contain lowercase characters? ")
    this.hasUppercase = isUppercase;    
    console.log("uppercase set.")
  },

  // Method used to set if password object can use lowercase.
  setLowercase: function (isLowercase) {

    isLowercase = window.confirm("Should the password contain lowercase characters? ")
    this.hasLowercase = isLowercase;    
    console.log("lowercase set.")
  },

  // Method used to set if password object can use numbers.
  setNumbers: function (isNumber) {

    isNumber = window.confirm("Should the password contain lowercase characters? ")
    this.hasNumbers = isNumber;    
    console.log("number set.")
  },

  // Method used to set if password object can use special characters.
  setSpecialChar: function (isSpecialChar) {

    isSpecialChar = window.confirm("Should the password contain lowercase characters? ")
    this.hasSpecialChar = isSpecialChar;    
    console.log("special character set.")

  },
  
  displayPassword: function () {
    console.log(this.characters)
  } 

}

// Event listener for a click from the generate button.
generateBtn.addEventListener("click", writePassword());

// writePassword() to the #password input.
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