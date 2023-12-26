function getRec(topLeft, dimensions) {
  const topRight = [topLeft[0] + dimensions[0], topLeft[1] + dimensions[1]];
  const bottomRight = [topLeft[0] + dimensions[0], topLeft[1] - dimensions[1]];
  const bottomLeft = [topLeft[0], topLeft[1] - dimensions[1]];
  return [topLeft, topRight, bottomRight, bottomLeft];
}

function checkOverlap(a, b) {
  const h =
    (a[0][0] <= b[0][0] && b[0][0] <= a[1][0]) ||
    (a[0][0] <= b[1][0] && b[1][0] <= a[1][0]);
  const v =
    (a[3][1] <= b[3][1] && b[3][1] <= a[0][1]) ||
    (a[3][1] <= b[0][1] && b[0][1] <= a[0][1]);
  return h && v;
}

function getOverlap(a, b) {
  const top = Math.min(a[0][1], b[0][1]);
  const right = Math.min(a[1][0], b[1][0]);
  const bottom = Math.max(a[3][1], b[3][1]);
  const left = Math.max(a[0][0], b[0][0]);
  return [top, right, bottom, left];
}

function getIntersectionArea(a, b) {
  const aRec = getRec(a.topLeft, a.dimensions);
  const bRec = getRec(b.topLeft, b.dimensions);

  if (!checkOverlap(aRec, bRec)) return 0;

  const [top, right, bottom, left] = getOverlap(aRec, bRec);
  const width = right - left;
  const height = top - bottom;
  return width * height;
}

console.log(
  getIntersectionArea(
    { topLeft: [1, 4], dimensions: [3, 3] },
    { topLeft: [0, 5], dimensions: [4, 3] }
  )
);
console.log(
  getIntersectionArea(
    { topLeft: [2, 6], dimensions: [4, 4] },
    { topLeft: [4, 4], dimensions: [5, 5] }
  )
);
console.log(
  getIntersectionArea(
    { topLeft: [0, 10], dimensions: [2, 2] },
    { topLeft: [5, 5], dimensions: [3, 3] }
  )
);
console.log(
  getIntersectionArea(
    { topLeft: [3, 8], dimensions: [6, 6] },
    { topLeft: [4, 7], dimensions: [2, 2] }
  )
);
console.log(
  getIntersectionArea(
    { topLeft: [1, 1], dimensions: [3, 3] },
    { topLeft: [4, 1], dimensions: [3, 3] }
  )
);
console.log(
  getIntersectionArea(
    { topLeft: [0, 0], dimensions: [2, 2] },
    { topLeft: [2, 2], dimensions: [2, 2] }
  )
);
