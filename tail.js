

const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`)
    : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const trimmedArrayCheck = function(array1, array2) {
  let i = 0;
  if ((array1.length > 0 && array2.length > 0) && array1.length === array2.length) { //check that arrays arent empty and that they are same length
    array1.forEach(function(val) { //compares each index of anticipated array output and newly trimmed array
      assertEqual(val, array2[i]);
      i++;
    });
  } else console.log("array not big enough");
};


const words1 = ["Yo Yo", "Lighthouse", "Labs"];
const answer = ["Lighthouse", "Labs"];
//console.log(tail(words));
trimmedArrayCheck(words1, answer);
//console.log(tail(words));
//console.log(words);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const test = [];
console.log(tail(test));
console.log(tail(words));

