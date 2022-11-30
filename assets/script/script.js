// Assignment code here
var passwordCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordCharLower = "abcdefghijklmnopqrstuvwxyz"
var passwordCharNum = "1234567890";
var passwordCharSpecial = "!@#$%^&*";
var charLength = {
  from: 8,
  to: 128
};

function randomNumGen() {
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
  var uppercaseLetters = confirm("Would you like upper case letters?");
  var specialChars = confirm("Would you like special characters?")
  var charLength = prompt("Please enter the number of characters you would like for your password.\n\nPlease enter a number between 8 and 128.")
  var passwordText = document.querySelector("#password");
  // uppercaseLetters.setAttribute("upperCase");
  // specialChars.setAttribute("specialChars");
  // charLength.setAttribute("charLength");
  
  if (uppercaseLetters === 'true' && specialChars === 'true') {}
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
