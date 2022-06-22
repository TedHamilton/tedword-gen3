// Assignment code here
window.alert ("Click button for password!!!");
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var number;
  var generateBtnEl = $("#generateBtn");
  function generatePassword() {
    var number length = 9,
    charset="abcdefghijklmnopqrstuvwrxyzABCDEFGHIJKLMNOPQRSTUVWRXYZ1234567890",
    retVal = "";
    for (var i=0), n=charset.length; i<length; ++i {
      retVal +=charset.charAt(Math.floor(Math.random()*n));
    }
    return retVal;
  }
 
  passwordText.value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
addEventListenerByClass("btn")
