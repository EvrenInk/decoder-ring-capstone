// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const baseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  function letterValue(letter, converter) {
    for(let j = 0; j < converter.length; j++) {
      if(converter[j] === letter) {
        letter = j;
      }
    }
    return letter;
  };

  function uniqueAlphabet(alphabet) {
    const letterOccurance = {};
    for(let j = 0; j < alphabet.length; j++) {
      const letter = alphabet[j].toLowerCase();
      if(letterOccurance[letter]) {
        return false;
      }
      letterOccurance[letter] = true;
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if(!alphabet) {return false};
    if(alphabet.length !== 26) {return false};
    if(uniqueAlphabet(alphabet) === false) {return false};
    let message = [];
    const subAlphabet = alphabet.split('');
    if(encode === true) {
      for(let i = 0; i < input.length; i++) {
        let letter = input[i];
        let value = letterValue(letter,baseAlphabet);
        if(typeof(value) !== "number") {
          message.push(value);
        } else {
          message.push(subAlphabet[value]);
        }
      }
    } else {
      for(let i = 0; i < input.length; i++) {
        let letter = input[i];
        let value = letterValue(letter,subAlphabet);
        if(typeof(value) !== "number") {
          message.push(value);
        } else {
          message.push(baseAlphabet[value]);
        }
      }
    }
    return(message.join(''));
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
