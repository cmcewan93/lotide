/**
 * -- check the array string matches the key name in the object.
 * -- check if that corresponding key is true or false
 * ---- if true add value to a new object.
 * ---- if false ignore
 * --
 */

const countOnly = function(allItems, itemsToCount) {
  let matches = {};
  //let keys = Object.keys(itemsToCount); // get an array of keys from itemsToCount object
  
  for (let key in itemsToCount) { //loops through keys in key array
    let count = 0;
    console.log(key);
    if (itemsToCount[key]) { //if the value is true
      for (let i = 0; i < allItems.length; i++) { //check all items to see if key matches
        if (key === allItems[i]) {
          count++;
        }
      }
    }
    if (count === 0 && itemsToCount[key] !== false) { //checks if key isnt there
      matches[key] = undefined;
    } else {
      matches[key] = count; //assigns count to new object
    }
  }
  return matches;
};





/**
  * TEST CASES
  */
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`)
    : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Jason",
  "Jason",
  "Matt"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Matt": false});

// let input = {
//   "Jason": true,
//   "Karima": true,
//   "Fang": true,
//   "Matt": false
// };

// for (let key in input) {
//   input.Jason
// }

assertEqual(result1["Jason"], 3);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Matt"], 0);