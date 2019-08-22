// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let flag = false;

  if (keys1.length === keys2.length) { //checks if lengths are the same
    for (key in keys1) {
      if (object1[key] === object2[key]) {  //checks if each object key is the same as the other
        flag = true;
      } else flag = false;
    }
  }
  return flag;
};

/**
 * Testers
 */
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`)
    : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false