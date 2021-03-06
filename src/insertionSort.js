const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }

  return arr;
};

module.exports = insertionSort;
