# sorting-algorithms-javascript

A collection of sorting algorithms implemented in javascript.
Includes tests.

## Bubble Sort

Time Complexity => O(n^2)

Uses two pointers (i & i+1), works through the array comparing values at each pointer.
If the value at i is less than the value at i+1, they are swapped.
Each pointer is then incremented.
On each pass through the array, the largest unsorted value is pushed to the last unsorted index.
Keeps making passes throught the array until there are no more swaps needed.
