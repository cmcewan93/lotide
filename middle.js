const assertArrayEquals = require('./assertArraysEqual');

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

module.exports = middle;
