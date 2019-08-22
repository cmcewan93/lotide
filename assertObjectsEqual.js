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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(` ✅✅✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(` ❌❌❌Assertion failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};

/**
 * TEST CASES
 */
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true
