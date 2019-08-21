const countLetters = function(string) {
  let result = {};
  string = string.replace(/\s+/g, ''); //remove white space
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (result[char]) { //if there is nothing will returne undefined
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};


/**
  * TEST CASES
  */

console.log(countLetters("lighthouse in the house"));

const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`)
    : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};