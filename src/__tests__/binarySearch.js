const { binarySearch } = require('../binarySearch');

describe('binarySearch', () => {
  test('normal', async () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 4)).toBe(3);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 6)).toBe(5);
  });

  test('not found', async () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 10)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 0, 5, 0)).toBe(-1);
  });
});