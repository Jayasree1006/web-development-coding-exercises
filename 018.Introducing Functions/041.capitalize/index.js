/*Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).*/
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }