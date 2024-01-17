// https://chat.openai.com/share/d1193fa8-8857-47d9-9d76-b6e393c67b8d

function countMaxHeaps(n) {
  // Function to compute binomial coefficients
  function binomialCoeff(n, k) {
    let res = 1;
    if (k > n - k) {
      k = n - k;
    }
    for (let i = 0; i < k; ++i) {
      res *= n - i;
      res /= i + 1;
    }
    return res;
  }

  // Function to calculate the number of nodes in the left subtree
  function getLeftCount(n) {
    if (n == 1) {
      return 0;
    }
    let h = Math.floor(Math.log2(n));
    let maxLastLevel = Math.pow(2, h);
    let actualLastLevel = n - (maxLastLevel - 1);
    if (actualLastLevel >= maxLastLevel / 2) {
      return maxLastLevel - 1; // left subtree is a full heap
    } else {
      return (
        maxLastLevel - 1 - (Math.floor(maxLastLevel / 2) - actualLastLevel)
      );
    }
  }

  // Recursive utility function to count heaps
  function countHeapsUtil(n, dp) {
    if (n <= 1) {
      return 1;
    }
    if (dp[n] !== undefined) {
      return dp[n];
    }
    let left = getLeftCount(n);
    dp[n] =
      binomialCoeff(n - 1, left) *
      countHeapsUtil(left, dp) *
      countHeapsUtil(n - left - 1, dp);
    return dp[n];
  }

  // Initialize a dp array to store results of sub problems
  let dp = new Array(n + 1);
  return countHeapsUtil(n, dp);
}

// Test the function with N = 3
console.log(countMaxHeaps(3));
