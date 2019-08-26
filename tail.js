

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const trimmedArrayCheck = function(array1, array2) { //checks each element of trimmed array
  let i = 0;
  if ((array1.length > 0 && array2.length > 0) && array1.length === array2.length) { //check that arrays arent empty and that they are same length
    array1.forEach(function(val) { //compares each index of anticipated array output and newly trimmed array
      assertEqual(val, array2[i]);
      i++;
    });
  } else console.log("array not big enough");
};

module.exports = tail;
// TEST CASES


