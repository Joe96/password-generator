// Assignment Code.
var generateBtn = document.querySelector("#generate");

// finalPassWord object.
var finalPassWord = {
  // Length lowercase, uppercase, `numeric, and/or special characters variables.
  passwordLength: 0,
  characters: [""],
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumbers: false,
  hasSpecialChar: false,
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",],
  number: ["0","1","2","3","4","5","6","7","8","9"],
  specialChar: ["!","@","#","$","%","^","&","*","'","(",")","+","=",".","/","?","<",">","-","_","[","]","|"," :",";",],


  // Method used to set password object's password length.
  setPasswordLength: function (number) {

    number = parseInt(prompt("How many character should the password have? : "));

    if(number <= 7) {
      alert("Number to short, try again!")
      number = parseInt(prompt("How many character should the password have? : "));

    } 
    else if (number >= 129){
      alert("Number to big, try again!")
      number = parseInt(prompt("How many character should the password have? : "));
    }
    else {
      this.passwordLength = number;
      console.log("Password length set.")
    }

  },

  // Method used to set if password object can use uppercase.
  setUppercase: function (isUpperCase) {

    isUpperCase = window.confirm("Should the password contain uppercase characters? ");
    this.hasUpperCase = isUpperCase;    
    console.log("uppercase set.");
  },

  // Method used to set if password object can use lowercase.
  setLowercase: function (isLowerCase) {

    isLowerCase = window.confirm("Should the password contain lowercase characters? ");
    this.hasLowerCase = isLowerCase;    
    console.log("lowercase set.");
  },

  // Method used to set if password object can use numbers.
  setNumbers: function (isNumber) {

    isNumber = window.confirm("Should the password contain numbers? ");
    this.hasNumbers = isNumber;    
    console.log("number set.");
  },

  // Method used to set if password object can use special characters.
  setSpecialChar: function (isSpecialChar) {

    isSpecialChar = window.confirm("Should the password contain special characters? ")
    this.hasSpecialChar = isSpecialChar;    
    console.log("special character set.")

  },
  
  setPassword: function (char) {
    console.log("adding character to password.")  
    console.log(char)  
    this.characters.push(char)
    
  } 

}

// writePassword() to the #password input.
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(finalPassWord.characters);

  passwordText.value = finalPassWord.characters.join("");
}

function generatePassword() {

  finalPassWord.setPasswordLength();
  console.log(finalPassWord.passwordLength)
  finalPassWord.setUppercase();
  console.log(finalPassWord.hasUpperCase)
  finalPassWord.setLowercase();
  console.log(finalPassWord.hasLowerCase)
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

  passwordStrength = [];

  upperCaseArray = finalPassWord.upperCase;
  lowerCaseArray = finalPassWord.lowerCase;
  numberArray = finalPassWord.number;
  specialCharArray = finalPassWord.specialChar;

  if (finalPassWord.hasUpperCase == true) {
    console.log(upperCaseArray)
    passwordStrength.push(upperCaseArray)
  } else {
    console.log("Do not use uppercase.")
  }

  if (finalPassWord.hasLowerCase == true) {
    console.log(lowerCaseArray)
    passwordStrength.push(lowerCaseArray)
  } else {
    console.log("Do not use lowercase.")
  }

  if (finalPassWord.hasNumbers == true) {
    console.log(numberArray)
    passwordStrength.push(numberArray)
  } else {
    console.log("Do not use numbers.")
  }

  if (finalPassWord.hasSpecialChar == true) {
    passwordStrength.push(specialCharArray)
    console.log(specialCharArray)
  }else {
    console.log("Do not use special characters.")
  }

  console.log(passwordStrength)
  console.log("Assembling Password...")

  for(var i= 0; i < finalPassWord.passwordLength; i++) {
    
    var char = passwordStrength[Math.floor(Math.random()*passwordStrength.length)];
    var item = char[Math.floor(Math.random()*char.length)];

    finalPassWord.setPassword(item);

  }
}