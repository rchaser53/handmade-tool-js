const binarySearch = (arr, l, r, val) => {
  if (r <= l) {
    return arr[r];
  }

  const middle = Math.floor((l + r) / 2);
  if (arr[middle] < val) {
    return binarySearch(arr, middle, r, val);
  } else {
    return binarySearch(arr, l, middle - 1, val);
  }
};

const insertSort = (arr, l, r) => {};
