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

const middle = function(array) {
  let middle = [];
  let index = 0;

  if (array.length % 2 === 0) { //if the array is an even length
    index = (Math.round((array.length / 2) - 1)); //divides array length, subtracts 1, then is rounded to nearest intger
    //console.log(index);
    middle.push((array[index]));
    middle.push((array[index + 1])); //returns the next element as well
  } else if (array.length % 2 === 1) { //if the array is an odd length
    index = (Math.round((array.length / 2) - 1));
    //console.log(index);
    middle.push(array[index]);
  }
  //console.log(middle);
  return middle;
};

assertArrayEquals(middle([1,2,3,4]), [2,3]);
assertArrayEquals(middle([1,2,3]), [2]);
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]