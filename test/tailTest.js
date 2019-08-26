const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const answer = ['Lighthouse', 'Labs'];
  it('returns [Lighthouse , Labs]', () => {
    assert.deepEqual(tail(words), answer);
  });
});





/*const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual')
*/

/*const words = ["Yo Yo", "Lighthouse", "Labs"];
const answer = ['Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertArraysEqual(tail(words), answer); // original array should still have 3 elements!
assertEqual(words.length, 3);
const test = [];
console.log(tail(test));
console.log(tail(words));
*/