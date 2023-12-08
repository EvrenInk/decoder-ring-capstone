// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function letterMatch(alphabet, letter) {
    letter = letter.toLowerCase();
    for (let j = 0; j < alphabet.length; j++) {
      if (letter === alphabet[j]) {
        letter = j;
        return letter;
      }
    }
    return letter;
  };
  function numberMatch(alphabet, letterNumber) {
    if (letterNumber >= 0) {
      return alphabet[letterNumber % 26];
    } else {
      return alphabet[(letterNumber % 26 + 26) % 26];
    }
  };
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  function caesar(input, shift, encode = true) {
    if (!encode) {shift = (shift * -1)};
    if (shift === 0 || shift > 24 || shift < -24) {return false};
    let encoded = [];
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      let letterNumber = letterMatch(alphabet, letter);
      let encodedLetter = "";
      if (typeof letterNumber === "number") {
        letterNumber += shift;
        encodedLetter = numberMatch(alphabet, letterNumber);
      } else {encodedLetter = letterNumber}
      encoded.push(encodedLetter);
    };
    return(encoded.join(''));
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
