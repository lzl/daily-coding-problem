// https://chat.openai.com/share/36e6db49-921c-4be7-b682-311832e83da2

function findRegularNumbers(n) {
  if (n === 0) return [];

  let regularNumbers = [1];
  let heap = [1];
  let seen = new Set([1]);

  while (regularNumbers.length < n) {
    let smallest = heap.shift();

    [2, 3, 5].forEach((i) => {
      let newNum = i * smallest;
      if (!seen.has(newNum)) {
        heap.push(newNum);
        seen.add(newNum);
      }
    });

    heap.sort((a, b) => a - b); // Min-heapify
    regularNumbers.push(heap[0]);
  }

  return regularNumbers;
}

// Example usage
console.log(findRegularNumbers(10)); // Finding the first 10 regular numbers
