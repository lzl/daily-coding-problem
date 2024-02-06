function rotateMatrix90DegreesClockwise(matrix) {
  const N = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      // Swap element at matrix[i][j] with element at matrix[j][i]
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < N; i++) {
    let low = 0,
      high = N - 1;
    while (low < high) {
      var temp = matrix[i][low];
      matrix[i][low] = matrix[i][high];
      matrix[i][high] = temp;
      low++;
      high--;
    }
  }

  return matrix;
}

// Example usage
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Original matrix:");
console.log(matrix);

const rotatedMatrix = rotateMatrix90DegreesClockwise(matrix);

console.log("Rotated matrix by 90 degrees clockwise:");
console.log(rotatedMatrix);
