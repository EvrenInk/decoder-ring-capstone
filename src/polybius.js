// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = [
    {"a":11}, {"b":21}, {"c":31}, {"d":41}, {"e":51},
    {"f":12}, {"g":22}, {"h":32}, {"i/j":42}, {"k":52},
    {"l":13}, {"m":23}, {"n":33}, {"o":43}, {"p":53},
    {"q":14}, {"r":24}, {"s":34}, {"t":44}, {"u":54},
    {"v":15}, {"w":25}, {"x":35}, {"y":45}, {"z":55},
  ];
  
  function polybiusEncoder(letter, alphabet) {
    for (let j = 0; j < alphabet.length; j++) {
      const toMatch = alphabet[j];
      if(Object.keys(toMatch)[0] === letter) {
        return toMatch[letter].toString();
      }
    }
    return letter;
  };

  function polybiusDecoder(letter, alphabet) {
    for (let j = 0; j < alphabet.length; j++) {
      const toMatch = alphabet[j];
      if (Object.values(toMatch)[0].toString() === letter) {
        return Object.keys(toMatch)[0];
      }
    }
    return letter;
  }

  function polybius(input, encode = true) {
    let finalMessage = [];
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (letter === "i" || letter === "j") {
          letter = "i/j";
        }
        const encodedLetter = polybiusEncoder(letter, alphabet);
        finalMessage.push(encodedLetter);
      };
      return(finalMessage.join(''));
    } 
    else if (encode === false) {
      let inputArray = input.split('');
      let valid = inputArray.filter((letter) => letter !== " ");
      if (valid.length % 2 !== 0) {return false};
      for (let i = 0; i < inputArray.length; i+= 2) {
        if(inputArray[i] === " ") {
          finalMessage.push(inputArray[i]);
          i -= 1;
        }
        else {
          const letter = `${inputArray[i]}${inputArray[i+1]}`;
          const decodedLetter = polybiusDecoder(letter,alphabet);
          finalMessage.push(decodedLetter);
        }
      };
      return(finalMessage.join(''));
    }
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
