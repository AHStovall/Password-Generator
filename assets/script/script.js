// Assignment code here
var passwordCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
// var passwordLength = querySelector.
// generateBtn.addEventListener("click",displayParameters());

function generatePassword(){
  if (generateBtn.addEventListener("click", displayParameters)){
    window.alert("Test")
  }

}

function displayParameters(){
  window.alert("Test")
}

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);