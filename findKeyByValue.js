/**
 * Implement the function findKeyByValue which takes in an object and a value.
 * It should scan the object and return the first key which contains the given value.
 *  If no key with that given value is found, then it should return undefined.
 */

const findKeyByValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value);
  //object keys gives array, find returns first elenet in array where true, undefined if not
};
 
/**
  * Test Cases
  *
  */

const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`)
    : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};

const bestTVShowsByGenre = {
  sci_Fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);