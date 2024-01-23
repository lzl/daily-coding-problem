function countDecodings(message) {
  const n = message.length;
  if (n === 0 || (n === 1 && message[0] === "0")) return 0; // Edge case handling

  // Initialize dp array
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // Empty string has one way to decode
  dp[1] = message[0] === "0" ? 0 : 1; // Single character string

  for (let i = 2; i <= n; i++) {
    // Single digit decode
    if (+message[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }

    // Two digit decode, check if the number formed is between 10 and 26
    if (
      +message[i - 2] === 1 ||
      (+message[i - 2] === 2 && +message[i - 1] <= 6)
    ) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

// Example usage
const message = "111";
console.log("Number of ways to decode:", countDecodings(message));
