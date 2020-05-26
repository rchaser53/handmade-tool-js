const insertToSortedArr = (arr, l, r, val) => {
  if (r <= l) {
    if (arr[r] <= val) {
      arr.splice(r + 1, 0, val);
    } else {
      arr.splice(r, 0, val);
    }
    return arr;
  }

  const middle = Math.floor((l + r) / 2);
  const targetVal = arr[middle];
  if (targetVal < val) {
    return insertToSortedArr(arr, middle + 1, r, val);
  } else if (targetVal === val) {
    arr.splice(middle, 0, val);
    return arr;
  } else {
    return insertToSortedArr(arr, l, middle, val);
  }
};

module.exports = {
  insertToSortedArr,
};
