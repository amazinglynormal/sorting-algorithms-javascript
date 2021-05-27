const selectionSort = require("../src/selectionSort");

describe("Selection Sort", () => {
  test("sorts array with unique values", () => {
    const testArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    selectionSort(testArray);

    expect(testArray).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("sorts array with non-unique values", () => {
    const testArray = [5, 6, 7, 8, 3, 2, 6, 8, 6];
    selectionSort(testArray);

    expect(testArray).toStrictEqual([2, 3, 5, 6, 6, 6, 7, 8, 8]);
  });

  test("leaves already sorted array unchanged", () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    selectionSort(testArray);

    expect(testArray).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("leaves empty array unchanged", () => {
    const testArray = [];
    selectionSort(testArray);

    expect(testArray).toStrictEqual([]);
  });
});
