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
