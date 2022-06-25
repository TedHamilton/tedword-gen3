// Assignment code here
window.alert ("Click button for password!!!");

 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = document.getElementById("password");
  var passwordText = document.querySelector("#password");


  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
   
   }
   console.log(getRandomLower)

   function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
   
   }
   console.log(getRandomUpper)

   function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
   
   }
   console.log(getRandomLowercase)
  
  
  document.getElementById("password").value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
