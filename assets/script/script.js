// Assignment code here
// var passwordCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var passwordCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordCharLower = "abcdefghijklmnopqrstuvwxyz";
var passwordCharNum = "1234567890";
var passwordCharSpecial = "!@#$%^&*";
var password = " ";
var passwordOutput = document.querySelector("#password");
var passwordLength = {
  from: 8,
  to: 128
};

//random number generator
function randomNumGen(passwordCharSet, passwordLength) {
  console.log(passwordCharSet)
  for (var i = 0; i <= passwordLength; i++) {
    var randomNum = Math.floor(Math.random()*passwordCharSet.length);
    password += passwordCharSet.substring(randomNum, randomNum+1);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();

  //variables outlining prompt and confirmation pop-ups
  var lowercaseLetters = confirm("Would you like lower case letters?");
  var uppercaseLetters = confirm("Would you like upper case letters?");
  var NumChars = confirm("Would you like numbers?")
  var specialChars = confirm("Would you like special characters?")
  var charLength = prompt("Please enter the number of characters you would like for your password.\n\nPlease enter a number between 8 and 128.")
  var passwordText = document.querySelector("#password");
  var passwordcharacters = "";
  
  
  //Logic dictating responses and inputting into the random number generator
  if (uppercaseLetters === true){
    passwordcharacters += passwordCharUpper
  }
  if (lowercaseLetters === true){
    passwordcharacters += passwordCharLower
  }
  if (NumChars === true){
    passwordcharacters += passwordCharNum
  }
  if (specialChars === true){
    passwordcharacters += passwordCharSpecial
  }
  while(charLength<8 || charLength>128){
    charLength =prompt("Please enter the number of characters you would like for your password.\n\nPlease enter a number between 8 and 128.")
  }
  randomNumGen(passwordcharacters, charLength);
  passwordText.value = password;
  console.log(password);
  passwordText.textContent = passwordOutput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
