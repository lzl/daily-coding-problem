function rotateArray(arr, k) {
  // Ensure k is within the bounds of the array length
  k %= arr.length;

  // Helper function to reverse a portion of the array
  function reverse(start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, arr.length - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(k, arr.length - 1);
}

// Example usage
let myArray = [1, 2, 3, 4, 5];
rotateArray(myArray, 2);
console.log(myArray); // Output will be [4, 5, 1, 2, 3]
