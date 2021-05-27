# Sorting Algorithms In Javascript

A collection of sorting algorithms implemented in javascript.
Includes tests.

1. [Bubble Sort](#bubble-sort)
2. [Selection Sort](#selection-sort)

## Bubble Sort

Time Complexity => O(n^2)

Uses two pointers (`i` & `i+1`), works through the array comparing values at each pointer.
If the value at `i` is less than the value at `i+1`, they are swapped.
Each pointer is then incremented.
On each pass through the array, the largest unsorted value is pushed to the last unsorted index.
Keeps making passes throught the array until there are no more swaps needed.

```javascript
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
};
```

## Selection Sort

Time Complexity => O(n^2)

Iterates through the array starting at index 0 and keeps track of the index of the lowest value.
After each iteration, swaps the lowest value with the iterations start index if the lowest value is not already in that position.
Increments the start index and passes through array again.
When the start index is the end of the array, the array sorted.

```javascript
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
};
```
