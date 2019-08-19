const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`)
    : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};
  
const head = function(array) {
  if (array !== undefined && array.length < 1) { //checks for empty array
    return undefined;
  } else {
    return array[0];
  }
};
/*
* TEST CASES
*/

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([1,2,3]));
console.log(head([]));
console.log(head([0,' ']));