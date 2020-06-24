const maxHeapify = (arr, i) => {
  const l = 2 * (i + 1);
  const r = l - 1;

  let largest = l < arr.length && arr[l] > arr[i] ? l : i;

  if (r < arr.length && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, largest);
  }
};

const buildMaxHeap = (arr) => {
  const H = Math.floor(arr.length / 2);
  for (let i = H; 0 <= i; i--) {
    maxHeapify(arr, i);
  }
};

const increaseKey = (arr, i, key) => {
  if (key < arr[i]) return;
  A[i] = key;
  while (1 < i && arr[Math.floor(i/2)] < arr[i]) {
    const hi = Math.floor(i/2);
    const temp = arr[hi]
    arr[hi] = arr[i];
    arr[i] = temp;
    i = hi;
  }
}

const insert = (arr, key) => {
  arr.push(Number.MIN_VALUE);
  increaseKey(arr, arr.length-1, key);
}

const heapExtractMax = (arr) => {
  const max = arr[0];
  arr[0] = arr.pop();
  buildMaxHeap(arr);
  return max
}

module.exports = {
  buildMaxHeap,
  insert,
  heapExtractMax,
}