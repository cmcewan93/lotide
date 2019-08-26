const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array !== undefined && array.length < 1) { //checks for empty array
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;
