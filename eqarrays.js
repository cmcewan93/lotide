const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;


