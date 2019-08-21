const eqArrays = function(array1, array2) {
  let count = 0;
  let flag = true;
  while (count < array1.length - 1 && count < array2.length - 1) {
    if (array1[count] !== array2[count]) {
      flag = false;
    }
    count++;
  }
  return flag;
};

const assertArrayEquals = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < newArray.length; i++) {
    for (let c = 0; c < itemsToRemove.length; c++) {
      if (newArray[i] === itemsToRemove[c]) {
        newArray.splice(i,1);
      }
    }
  }
  return newArray;
};

console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);