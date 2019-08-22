const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`)
    : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};

const obj1 = {"Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(obj1, x => x.stars === 2),'noma'); // => "noma"