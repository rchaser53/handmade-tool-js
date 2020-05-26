const binarySearch = (arr, l, r, val) => {
  if (r <= l) {
    return arr[r] === val ? r : -1;
  }

  const middle = Math.floor((l + r) / 2);
  const targetVal = arr[middle];
  if (targetVal < val) {
    return binarySearch(arr, middle + 1, r, val);
  } else if (targetVal === val) {
    return middle;
  } else {
    return binarySearch(arr, l, middle, val);
  }
};

module.exports = {
  binarySearch,
};
