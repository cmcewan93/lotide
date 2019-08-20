const assertEqual = function(actual, expected) {
  actual === expected 
  ? console.log(` ✅✅✅Assertion passed: ${actual} === ${expected}`) 
  : console.log(` ❌❌❌Assertion failed: ${actual} !==  ${expected}`);
};

const eqArrays = function (array1, array2) {
  let count = 0;
  let flag = true;
  while(count < array1.length - 1 && count < array2.length - 1){
    if(array1[count] !== array2[count]){
      flag = false;
    }
    count++;
  }
  return flag;
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), false);
assertEqual(eqArrays(["1", 2, 3], [1, 5, 3]), false);
assertEqual(eqArrays([1, 5, 3], [1, 5, 3]), true);
assertEqual(eqArrays(["4", 2, 3], ["4", 2, 3]), true);

