const binarySearch = (arr, l, r, val) => {
  if (r <= l) {
    return r;
  }

  const middle = Math.floor((l + r) / 2);
  if (arr[middle] < val) {
    return binarySearch(arr, middle + 1, r, val);
  } else {
    return binarySearch(arr, l, middle, val);
  }
};

module.exports = {
  binarySearch,
};
