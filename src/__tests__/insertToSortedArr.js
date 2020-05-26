const { insertToSortedArr } = require('../insertToSortedArr');

describe('insertToSortedArr', () => {
  test('inside', async () => {
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 1)).toEqual(
      [1,1,2,3,4,5,6]
    );
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 2)).toEqual(
      [1,2,2,3,4,5,6]
    );
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 3)).toEqual(
      [1,2,3,3,4,5,6]
    );
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 4)).toEqual(
      [1,2,3,4,4,5,6]
    );
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 5)).toEqual(
      [1,2,3,4,5,5,6]
    );
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 6)).toEqual(
      [1,2,3,4,5,6,6]
    );
  });

  test('outside', async () => {
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 0)).toEqual(
      [0,1,2,3,4,5,6]
    );
    expect(insertToSortedArr([1, 2, 3, 4, 5, 6], 0, 5, 7)).toEqual(
      [1,2,3,4,5,6,7]
    );
    expect(insertToSortedArr([2, 4, 6, 8, 10, 12], 0, 5, 6)).toEqual(
      [2, 4, 6, 6, 8, 10, 12]
    );

  });

  test('no value inside', async () => {
    expect(insertToSortedArr([2, 4, 6, 8, 10, 12], 0, 5, 0)).toEqual(
      [0, 2, 4, 6, 8, 10, 12]
    );
    expect(insertToSortedArr([2, 4, 6, 8, 10, 12], 0, 5, 5)).toEqual(
      [2, 4, 5, 6, 8, 10, 12]
    );
  });
});