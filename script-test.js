
// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLength = prompt("How long do you want your password to be?")
var allowSpecial = confirm("Allow Special Characters?")
var allowNum = confirm("Allow Numbers?")

// Character Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", "?", "@", "^", "`", "~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}

// Add event listener to generate button
document.getElementById("generateBtn").addEventListener("click", writePassword);
function displayPassword() {
  document.getElementById("password").innerHTML = Password()
}
generateBtn.addEventListener("click", writePassword);