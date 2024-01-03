function isOverlapping(a, b) {
  const at = a.top_left[1];
  const ar = a.top_left[0] + a.dimensions[0];
  const ab = a.top_left[1] - a.dimensions[1];
  const al = a.top_left[0];

  const bt = b.top_left[1];
  const br = b.top_left[0] + b.dimensions[0];
  const bb = b.top_left[1] - b.dimensions[1];
  const bl = b.top_left[0];

  return ab < bt && bb < at && ar > bl && br > al;
}

const r1 = {
  top_left: [1, 4],
  dimensions: [3, 3],
};
const r2 = {
  top_left: [-1, 3],
  dimensions: [2, 1],
};
const r3 = {
  top_left: [0, 5],
  dimensions: [4, 3],
};

console.log(isOverlapping(r1, r2));
console.log(isOverlapping(r1, r3));
console.log(isOverlapping(r2, r3));
