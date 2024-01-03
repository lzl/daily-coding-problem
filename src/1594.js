// https://chat.openai.com/share/ddc07a73-3641-4740-be08-b7e5f145b857

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

function Rectangle(topLeft, dimensions) {
  this.x1 = topLeft[0];
  this.y1 = topLeft[1];
  this.x2 = this.x1 + dimensions[0];
  this.y2 = this.y1 - dimensions[1];
}

function doOverlap(rectA, rectB) {
  // Check if one rectangle is to the left of the other
  if (rectA.x1 >= rectB.x2 || rectB.x1 >= rectA.x2) {
    return false;
  }
  // Check if one rectangle is above the other
  if (rectA.y1 <= rectB.y2 || rectB.y1 <= rectA.y2) {
    return false;
  }
  return true;
}

function checkRectanglesOverlap(rectangles) {
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
      if (doOverlap(rectangles[i], rectangles[j])) {
        return true;
      }
    }
  }
  return false;
}

// Example rectangles
const rectangles = [
  new Rectangle([1, 4], [3, 3]),
  new Rectangle([-1, 3], [2, 1]),
  new Rectangle([0, 5], [4, 3]),
];

console.log(checkRectanglesOverlap(rectangles)); // Output: true
