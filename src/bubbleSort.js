// Time complexity => O(n^2)

const bubbleSort = (arr) => {
  if (arr.length < 2) return;

  let lastIndex = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (i + 1 > lastIndex) break;

      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
    lastIndex--;
  }

  return arr;
};

module.exports = bubbleSort;
