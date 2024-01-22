// https://chat.openai.com/share/6755abad-5289-42bd-8415-a07a9ba0fe10

function findLexicographicallySmallestString(inputString, k) {
  if (k > 1) {
    // If k > 1, return the sorted string
    return inputString.split("").sort().join("");
  } else {
    // For k = 1, find the lexicographically smallest string
    let smallestString = inputString;

    for (let i = 0; i < inputString.length; i++) {
      // Rotate the string: move the first character to the end
      inputString = inputString.substr(1) + inputString[0];

      // Update smallestString if the current rotation is smaller
      if (inputString < smallestString) {
        smallestString = inputString;
      }
    }

    return smallestString;
  }
}

// Example usage
let inputString = "daily";
let k = 1;
console.log(findLexicographicallySmallestString(inputString, k));
