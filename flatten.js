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

const flatten = function(arrayOfArrays) {
  let newArray = [];
  for (let i = 0; i < arrayOfArrays.length; i++) { //outer array
    if (Array.isArray(arrayOfArrays[i])) { //checks each element of outer array determines if it is an array
      for (let c = 0; c < arrayOfArrays[i].length; c++) { //if it is, iterates through elelments
        newArray.push(arrayOfArrays[i][c]);
      }
    } else {
      newArray.push(arrayOfArrays[i]); //if not array within array, simply adds element to return array
    }
  }
  return newArray; //return newly created array
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArrayEquals(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
assertArrayEquals(flatten([1, 2, [3, 4], 5, [6,7,8,9,10]]),[1,2,3,4,5,6,7,8,9,10]);