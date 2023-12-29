const colors = ["R", "G", "B", "G", "B"];

function mergeColor(a, b) {
  const maps = {
    RG: "B",
    GR: "B",
    RB: "G",
    BR: "G",
    GB: "R",
    BG: "R",
  };
  return maps[`${a}${b}`];
}

function minRemainingNum(arr) {
  let idx = 0;
  let cloned = [...arr];
  while (idx < cloned.length - 1) {
    const left = cloned[idx];
    const right = cloned[idx + 1];
    if (left === right) {
      idx++;
      continue;
    }
    const merged = mergeColor(left, right);
    cloned = [...cloned.slice(0, idx), merged, ...cloned.slice(idx + 2)];
    console.log("new arr:", cloned);
    if (idx !== 0) idx--;
  }
  return cloned.length;
}

console.log(minRemainingNum(colors));

function minimizeQuxes(quxes) {
  let countR = quxes.filter((color) => color === "R").length;
  let countG = quxes.filter((color) => color === "G").length;
  let countB = quxes.filter((color) => color === "B").length;

  // Case where at least two counts are zero
  if (
    (countR === 0 && countG === 0) ||
    (countG === 0 && countB === 0) ||
    (countR === 0 && countB === 0)
  ) {
    return countR + countG + countB;
  }

  // If the total count is odd, one Qux will always remain after transformations
  if ((countR + countG + countB) % 2 === 1) {
    return 1;
  }

  // If the total count is even, two Quxes of the same color will remain
  return 2;
}

// Test the function
console.log(minimizeQuxes(colors)); // Expected output: 1
