const maxHeapify = (arr, i) => {
  const l = 2 * i;
  const r = l + 1;

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
