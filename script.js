
document.getElementById("generateBtn").addEventListener("click", writePassword);

function displayPassword() {
  document.getElementById("password").innerHTML = Password();
}


var generateBtn = document.querySelector("#generate");
var allowSpecial = confirm("Allow special characters?");
var allowUpper = confirm("Allow uppercase letters?");
var allowLower = confirm("Allow lowercase letters?");
var allowNum = confirm("Allow numbers in your password?");
var passChar = parseInt(prompt("How long would you like your password to be?"));


// Character Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", "?", "@", "^", "`", "~"];

var choices = [];

if (allowSpecial) {
    choices.push(specialChar);
}

if (allowUpper) {
    choices.push(upperCase);
}

if (allowLower) {
    choices.push(lowerCase);
}

if (allowNum) {
    choices.push (numbers)
}

if (passChar < 8) {
    alert("Password must be least 8 characters long")
}  

if (passChar >= 128) {
    alert("Password must be less than 128 characters")
}

var password = "";

for (var i=0; i < passChar; i++) {
    var choice = choices[Math.floor(Math.random() * choices.length)];
    var random = choice[Math.floor(Math.random() * choice.length)];
    password += random;
    password === choice
}

console.log(password);
// return password


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  document.getElementById("generateBtn").addEventListener("click", writePassword);
}

// passwordText.value = password; 
