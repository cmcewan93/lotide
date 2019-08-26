const middle = require('../middle');
const assertArrayEquals = require('../assertArraysEqual');


assertArrayEquals(middle([1,2,3,4]), [2,3]);
assertArrayEquals(middle([1,2,3]), [2]);
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]