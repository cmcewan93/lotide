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

const assertArrayEquals = function (array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log(` ✅✅✅Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(` ❌❌❌Assertion failed: ${array1} !==  ${array2}`);
  }
}
assertArrayEquals([1, 2, 3], [1, 2, 3]);
assertArrayEquals(['a', 2, 3], [1, 2, 3]);


