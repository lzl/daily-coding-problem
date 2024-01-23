function countDecodings(message) {
  const n = message.length;

  if (n === 0 || n === 1) return 1;

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (+message[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }
    if (
      +message[i - 2] === 1 ||
      (+message[i - 2] === 2 && +message[i - 1] <= 6)
    ) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

message = "111";
console.log("Number of ways to decode:", countDecodings(message));
