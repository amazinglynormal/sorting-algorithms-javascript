# Sorting Algorithms In Javascript

A collection of sorting algorithms implemented in javascript.
Includes tests.

1. [Bubble Sort](#bubble-sort)
2. [Selection Sort](#selection-sort)
3. [Insertion Sort](#insertion-sort)

## Bubble Sort

Time Complexity => O(n^2)

Uses two pointers (`i` & `i + 1`), works through the array comparing values at each pointer.
If the value at `i` is less than the value at `i + 1`, they are swapped.
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

  return arr;
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

  return arr;
};
```

## Insertion Sort

Time Complexity => O(n^2)

Starts at index 1 (assuming a zero-indexed array) `let i = 1` and assigns its value to a variable `temp`, leaving that position "empty" Then iterates through values to the left of the start index `j = i - 1`. If the value is greater than the `temp` value, shifts that value into the array position to the right and decrements `j`. If not, temp value is inserted into the "empty" position. Continues iterating the array until `i` is equal to the final index, at which point the array is sorted.

```javascript
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
```
