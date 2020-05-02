// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write Password to the Password Input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

// Function to generate the random password
function generatePassword (){
  
  var generateBtn = document.querySelector("#generate");
  

  // Password length prompt with loop to verify proper password length
  var passChar = parseInt(prompt("How long would you like your password to be?"));   
  while (passChar < 8 || passChar > 128 || passChar === NaN) {    
      if (passChar < 8) {
        alert("Password must be least 8 characters long");
        passChar = parseInt(prompt("How long would you like your password to be?"));
      }   else if (passChar > 128) {
            alert("Password must be less than 128 characters");
            passChar = parseInt(prompt("How long would you like your password to be?"));
      }   else if (passChar === NaN) {
            alert("Please enter a password length")
            passChar = parseInt(prompt("How long would you like your password to be?"));
      } 
  }

  // Password correct length, confirm password length
  if (passChar > 8 && passChar < 128) {
    confirm("Confirm password length of " + passChar)
  }


  // Allow variables
  var allowSpecial = confirm("Allow special characters?");
  var allowUpper = confirm("Allow uppercase letters?");
  var allowLower = confirm("Allow lowercase letters?");
  var allowNum = confirm("Allow numbers in your password?");
  
  


  // Character Arrays
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", "?", "@", "^", "`", "~"];

  // User input array
  var choices = [];

  // Special characters yes to input array
  if (allowSpecial) {
      choices.push(specialChar);
  }

  // Uppercase letters yes to input array
  if (allowUpper) {
      choices.push(upperCase);
  }

  // Lowercase letters yes to input array
  if (allowLower) {
      choices.push(lowerCase);
  }

  // Number yes to input array
  if (allowNum) {
      choices.push (numbers)
  }

  // if (choices[i] = [i] - 1) {
  //   alert("Please select at least 1 character input.")
  //   passChar = parseInt(prompt("How long would you like your password to be?"));
  // }

   // New password array
  var password = "";

  // Loop to generate random password using user input
  for (var i=0; i < passChar; i++) {
      var choice = choices[Math.floor(Math.random() * choices.length)];
      var random = choice[Math.floor(Math.random() * choice.length)];
      password += random;
      password === choice;
  }   
      
  
      return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

