// Assignment code here
// Declare variables that will store input from user
function determineCriteria () {
  var numChars = "01234567890123456789";
  var lowChars = "abcdefghijklmnopqrstuvwxyz";
  var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specChars = "!@#$%^&*()!@#$%^&*()";
  var passwordCriteria = "";
  var passStrLength = null;
  var passLwr = null;
  var passUpr = null;
  var passNum = null;
  var passSpe = null;
  //First Prompt - Get Length - min 8, max 128 characters
  passStrLength = window.prompt("Input the number of characters for your password length. Minimum of 8, maximum of 128.", "8");
  var passIntLength = parseInt(passStrLength);
  while (!Number.isInteger(passIntLength) || (passIntLength < 7 || passIntLength > 128)) {
    passStrLength = window.prompt("Input the number of characters for your password length. Minimum of 8, maximum of 128.", "8");
    passIntLength = parseInt(passStrLength);
  }
  // Must answer at least one prompt from prompts 2-5
  // Second Prompt - Include Lowercase
  passLwr = window.prompt("Include Lowercase? Answer yes or no.", "yes");
  passLwr = passLwr.toLowerCase();
  if (passLwr == "yes") {
    passLwr = true;
    passwordCriteria += lowChars;
  } else {
    passLwr = false;
  }
  // Third Prompt - Include Uppercase
  passUpr = window.prompt("Include Uppercase? Answer yes or no.", "yes");
  passUpr = passUpr.toLowerCase();
  if (passUpr == "yes") {
    passUpr = true;
    passwordCriteria += upChars;
  } else {
    passUpr = false;
  }
  // Fourth Prompt - Include Numeric
  passNum = window.prompt("Include Numeric? Answer yes or no.", "yes");
  passNum = passNum.toLowerCase();
  if (passNum == "yes") {
    passNum = true;
    passwordCriteria += numChars;
  } else {
    passNum = false;
  }
  // Fifth Prompt - Include Special Characters
  passSpe = window.prompt("Include Special Characters? Answer yes or no.", "yes");
  passSpe = passSpe.toLowerCase();
  if (passSpe == "yes") {
    passSpe = true;
    passwordCriteria += specChars;
  } else {
    passSpe = false;
  }
  while (!passwordCriteria) {
    passLwr = window.prompt("Please select one of the following. Include Lowercase? Answer yes or no.", "yes");
    passLwr = passLwr.toLowerCase();
    if (passLwr == "yes") {
      passLwr = true;
      passwordCriteria += lowChars;
    } else {
      passLwr = false;
    }
    // Third Prompt - Include Uppercase
    passUpr = window.prompt("Include Uppercase? Answer yes or no.", "yes");
    passUpr = passUpr.toLowerCase();
    if (passUpr == "yes") {
      passUpr = true;
      passwordCriteria += upChars;
    } else {
      passUpr = false;
    }
    // Fourth Prompt - Include Numeric
    passNum = window.prompt("Include Numeric? Answer yes or no.", "yes");
    passNum = passNum.toLowerCase();
    if (passNum == "yes") {
      passNum = true;
      passwordCriteria += numChars;
    } else {
      passNum = false;
    }
    // Fifth Prompt - Include Special Characters
    passSpe = window.prompt("Include Special Characters? Answer yes or no.", "yes");
    passSpe = passSpe.toLowerCase();
    if (passSpe == "yes") {
      passSpe = true;
      passwordCriteria += specChars;
    } else {
      passSpe = false;
    }
  }
  return {chars: passwordCriteria, length: passIntLength};
}

function generatePassword() {
  var password = "";
  var criteria = determineCriteria();
  // Create random password based on criteria
  for (var i = 0; i < criteria.length; i++) {
    var ranNum = Math.floor(Math.random() * criteria.chars.length);//!@#$%^&*()!@#$%^&*()abcdefghijklmnopqrstuvwxyz
    password += criteria.chars.substring(ranNum, ranNum + 1);//!@#$%^&*()!@#$%^&*()abcdefghijklmnopqrstuvwxyz
  }
  // Return created password
  return password;
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