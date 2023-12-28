// Method 1: Dynamic Programming
function countPaths(grid) {
  const N = grid.length;
  const M = grid[0].length;
  let dp = Array.from(Array(N), () => Array(M).fill(0));

  // Base case: start point
  dp[0][0] = 1;

  // Filling the first row and first column
  for (let i = 1; i < N; i++) {
    dp[i][0] = grid[i][0] == 0 && dp[i - 1][0] == 1 ? 1 : 0;
  }
  for (let j = 1; j < M; j++) {
    dp[0][j] = grid[0][j] == 0 && dp[0][j - 1] == 1 ? 1 : 0;
  }

  // Filling the rest of the dp array
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (grid[i][j] == 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  console.log("dp:", dp);
  // Return the number of ways to reach the bottom-right corner
  return dp[N - 1][M - 1];
}

// Test the function with the provided example
const grid = [
  [0, 0, 1],
  [0, 0, 1],
  [1, 0, 0],
];

console.log(countPaths(grid)); // Output should be 2

// Method 2: Depth-First Search (DFS)
function countPathsDFS(grid) {
  const N = grid.length;
  const M = grid[0].length;
  let memo = Array.from(Array(N), () => Array(M).fill(-1));

  function dfs(x, y) {
    // If out of bounds or at a wall, return 0
    if (x < 0 || y < 0 || x >= N || y >= M || grid[x][y] === 1) {
      return 0;
    }

    // If at the bottom-right corner, return 1
    if (x === N - 1 && y === M - 1) {
      return 1;
    }

    // If this subproblem is already solved, return the stored value
    if (memo[x][y] !== -1) {
      return memo[x][y];
    }

    // Recursive calls for right and down paths
    memo[x][y] = dfs(x + 1, y) + dfs(x, y + 1);
    return memo[x][y];
  }

  return dfs(0, 0);
}

console.log(countPathsDFS(grid)); // Output should be 2

function dfs(arr, i = 0, j = 0, memo) {
  if (!memo) {
    memo = Array.from(Array(arr.length), () => Array(arr[0].length).fill(-1));
  }

  if (i === arr.length - 1 && j === arr[i].length - 1) {
    return 1;
  }

  if (
    i < 0 ||
    j < 0 ||
    i > arr.length - 1 ||
    j > arr[i].length - 1 ||
    arr[i][j] === 1
  ) {
    return 0;
  }

  if (memo[i][j] !== -1) {
    return memo[i][j];
  }

  memo[i][j] = dfs(arr, i + 1, j, memo) + dfs(arr, i, j + 1, memo);
  return memo[i][j];
}

console.log(dfs(grid));
