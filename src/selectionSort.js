// Time complexity => O(n^2)
// Sorts in place so returning the array is unnecessary

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestValueIndex]) {
        lowestValueIndex = j;
      }
    }

    if (lowestValueIndex != i) {
      let temp = arr[i];
      arr[i] = arr[lowestValueIndex];
      arr[lowestValueIndex] = temp;
    }
  }

  return arr;
};

module.exports = selectionSort;
