const stepArr = [6, 2, 4, 0, 5, 1, 1, 4, 2, 9];

function calculateMinJumps(arr) {
  let jump = 0;
  let idx = 0;
  let max = 0;
  let maxIdx = 0;

  while (idx < arr.length) {
    const item = arr[idx];

    if (idx + item >= arr.length - 1) {
      jump++;
      break;
    }

    for (let i = 1; i <= item; i++) {
      const num = arr[idx + i];
      if (num > max) {
        max = num;
        maxIdx = idx + i;
      }
    }
    idx = maxIdx;
    max = 0;
    jump++;
  }

  return jump;
}

console.log(calculateMinJumps(stepArr)); // time: O(n^2), space: O(1)

function calculateMinJumps2(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  if (arr[0] === 0) {
    return -1;
  }

  let maxReach = arr[0];
  let steps = arr[0];
  let jumps = 1;

  for (let i = 1; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return jumps;
    }

    maxReach = Math.max(maxReach, i + arr[i]);
    steps--;

    if (steps === 0) {
      jumps++;

      if (i >= maxReach) {
        return -1;
      }

      steps = maxReach - i;
    }
  }

  return -1;
}

console.log(calculateMinJumps2(stepArr)); // time: O(n), space: O(1)

function minJumps(arr) {
  let jumps = 0,
    currentEnd = 0,
    farthest = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    // Update the farthest we can reach
    farthest = Math.max(farthest, i + arr[i]);

    // If we have come to the end of the current range
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      // If the farthest we can reach is less than or equal to current index, jump is not possible
      if (farthest <= i) return -1;
    }
  }

  return jumps;
}

console.log(minJumps(stepArr)); // time: O(n), space: O(1)
