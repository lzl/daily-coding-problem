// https://chat.openai.com/share/334c53ee-83ef-4d2d-9471-5448eeda39e9

function countWays(N) {
  if (N === 0) return 0;
  if (N === 1) return 1;

  const ways = [0, 1];

  for (let i = 2; i <= N; i++) {
    if (!ways[i]) ways[i] = 0;
    ways[i] += ways[i - 1];
    ways[i] += ways[i - 2] * 2;
    console.log("i:", i, ways);
  }

  return ways[N];
}

console.log(countWays(4));
