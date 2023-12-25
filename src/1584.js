// https://chat.openai.com/share/dcfc3b09-276c-4065-bddd-1345db0b8a09

const sample = [[1, 2], [3], [], [4, 5, 6]];

class Solution {
  constructor(defaultValue) {
    this.value = defaultValue;
    this.i = 0;
    this.j = 0;
  }

  has_next() {
    const has_no_next =
      this.j === this.value.length - 1 &&
      this.value[this.j][this.i] === undefined;
    return !has_no_next;
  }

  next() {
    if (!this.has_next()) throw new Error("there are no more elements");

    while (this.j < this.value.length) {
      const arr = this.value[this.j];
      while (this.i < arr.length) {
        const val = arr[this.i];
        this.i++;
        if (val) return val;
      }
      this.j++;
      this.i = 0;
    }
  }
}

const arr = new Solution(sample);
console.log("1:", arr.next());
console.log("2:", arr.next());
console.log("3:", arr.next());
console.log("4:", arr.next());
console.log("5:", arr.next());
console.log("6:", arr.next());
// console.log("7:", arr.next());

class TwoDIterator {
  constructor(arr) {
    this.arr = arr;
    this.outerIndex = 0;
    this.innerIndex = 0;
    this.advanceToNext();
  }

  advanceToNext() {
    // Advance to the next non-empty array
    while (
      this.outerIndex < this.arr.length &&
      this.innerIndex === this.arr[this.outerIndex].length
    ) {
      this.outerIndex++;
      this.innerIndex = 0;
    }
  }

  has_next() {
    // Check if there is a next element in the array of arrays
    return this.outerIndex < this.arr.length;
  }

  next() {
    if (!this.has_next()) {
      throw new Error("No more elements");
    }

    const nextElement = this.arr[this.outerIndex][this.innerIndex];
    this.innerIndex++;
    this.advanceToNext();
    return nextElement;
  }
}

// Example usage
const it = new TwoDIterator(sample);
while (it.has_next()) {
  console.log(it.next());
}
