// Assignment code here
window.alert ("Click button for password!!!");

 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = document.getElementById("password");
  var passwordText = document.querySelector("#password");

const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener("click" , () =>{
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = lowercaseEl.checked;
  const hasSymbol = lowercaseEl.checked;

  resultEl.innertext = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );

});


function generatePassword(lower, upper, number, symbol, length){

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol } ].filter
  (
    item => Objective.values(item)[0]
  );

  if(typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(types => {
      const funcName = object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    })
  }

  const finalPassword = generatedPassword.slice(0,length)

  return finalPassword;

}


//generating functions
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
   
   }

   function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
   
   }

   function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
   
   }

   function getRandomSymbol() {
    const symbols="!@#$%^&*(),.";
    return symbols[Math.floor(Math.random() * Symbol.length)];
   
   }
  
  
  document.getElementById("password").value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
