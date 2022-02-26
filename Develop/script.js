// Assignment code here
// Declare variables that will store input from user
function generatePassword() {
  //First Prompt - Get Length - min 8, max 128 characters
  // Must answer at least one prompt from prompts 2-5
  // Second Prompt - Include Lowercase
  // Third Prompt - Include Uppercase
  // Fourth Prompt - Include Numeric
  // Fifth Prompt - Include Special Characters
  // Create random password based on criteria
  // Return created password
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