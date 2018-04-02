/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must remain in place.

Zero isn't an odd number and you don't need to move it. If you have an empty array
you need to return it.
Example: sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  const arr = array;
  if (arr.length === 0) {
    return [];
  }
  const tempArr = [];
  arr.forEach((element, index) => {
    const elem = element;
    if (elem % 2 === 1) {
      tempArr.push(elem);
      arr[index] = null;
    }
  });
  tempArr.sort((a, b) => a - b);

  arr.forEach((element, index) => {
    const el = element;
    if (el === null) {
      arr[index] = tempArr[0];
      tempArr.shift();
    }
  });
  return arr;
}

sortArray([3, 4, 7, 6, 9, 11, 5, 4]);
