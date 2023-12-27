const stepArr = [6, 2, 4, 0, 5, 1, 1, 4, 2, 9];

function calculateMinJumps(arr) {
  let jump = 0;
  let idx = 0;
  let max = 0;
  let maxIdx = 0;

  while (idx < arr.length) {
    const item = arr[idx];

    if (idx + item >= arr.length - 1) {
      jump++
      break
    }

    for (let i = 1; i <= item; i++) {
      const num = arr[idx + i];
      if (num > max) {
        max = num
        maxIdx = idx + i
      }
    }
    idx = maxIdx;
    max = 0;
    jump++;
  }

  return jump;
}

console.log(calculateMinJumps(stepArr));
