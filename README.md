# sorting-algorithms-javascript

A collection of sorting algorithms implemented in javascript.
Includes tests.

## Bubble Sort

Time Complexity => O(n^2)

Uses two pointers (`i` & `i+1`), works through the array comparing values at each pointer.
If the value at `i` is less than the value at `i+1`, they are swapped.
Each pointer is then incremented.
On each pass through the array, the largest unsorted value is pushed to the last unsorted index.
Keeps making passes throught the array until there are no more swaps needed.

## Selection Sort

Time Complexity => O(n^2)

Iterates through the array starting at index 0 and keeps track of the index of the lowest value.
After each iteration, swaps the lowest value with the iterations start index if the lowest value is not already in that position.
Increments the start index and passes through array again.
When the start index is the end of the array, the array sorted.
