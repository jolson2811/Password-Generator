// Assignment code here
// Declare variables that will store input from user
var passStrLength = null;
function generatePassword() {
  //First Prompt - Get Length - min 8, max 128 characters
  passStrLength = window.prompt("Input the number of characters for your password length. Minimum of 8, maximum of 128.", "8");
  var passIntLength = parseInt(passStrLength); 
  while (!Number.isInteger(passIntLength) || (passIntLength < 7 || passIntLength > 128)) {
    passStrLength = window.prompt("Input the number of characters for your password length. Minimum of 8, maximum of 128.", "8");
    passIntLength = parseInt(passStrLength);
  } /*
  while (passIntLength < 7 || passIntLength > 128) {
    passStrLength = window.prompt("Input must be a minimum of 8 and maximum of 128.", "8");
    passIntLength = parseInt(passStrLength);
  }*/
  // Must answer at least one prompt from prompts 2-5
  // Second Prompt - Include Lowercase
  // Third Prompt - Include Uppercase
  // Fourth Prompt - Include Numeric
  // Fifth Prompt - Include Special Characters
  // Create random password based on criteria
  // Return created password
  return passIntLength;
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
generateBtn.addEventListener("click", writePassword);