const assertEqual = function(actual, expected) {
  actual === expected 
  ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`) 
  : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};

assertEqual('true', 'true');
assertEqual('true', 'false');
assertEqual(1, 2);
assertEqual(5, 5);