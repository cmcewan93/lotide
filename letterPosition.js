
const letterPositions = function(string) {
  const result = {};
  string = string.replace(/\s+/g, ''); //trim whitespace
  let stringArr = string.split('');

  for (const key of string) {
    result[key] = occurrences(key, stringArr);
  }
  return result;
};

const occurrences = function(char, array) {
  let indexes = [];
  array.forEach(function(elem, index) {
    if (elem === char) {
      indexes.push(index);
    }
  });
  return indexes;
};


/**
 *
 * Test Cases
 */

//assertArrayEquals(letterPositions("hello").e, [1])

console.log(letterPositions("hell o"));

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


//assertArrayEquals(letterPositions("hello").e, [1])
//assertArrayEquals(letterPositions("hello my name is ").l, [1,2])