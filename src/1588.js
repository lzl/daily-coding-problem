const example = [
  [0, 0, 1],
  [0, 0, 1],
  [1, 0, 0],
];

function calculateWays(matrix) {
  let n = matrix[0].length;
  let m = matrix.length;

  let ways = 0;
  let ni = 0;
  let mi = 0;
  while (ni < n - 1 && mi < m - 1) {
    if (ni === n - 1 && mi === m - 1) {
      ways++;
      ni = 0;
      mi = 0;
    }

    if (matrix[mi][ni] === 1) {
      ni = 0;
      mi = 0;
    }

    if (matrix[mi][ni + 1] === 1) {
      mi++;
    }

    ni++;
    continue;
  }
}

function setMatrix(dp, mi, ni, val) {
  if (!dp[mi]) dp[mi] = [];
  if (!dp[mi][ni]) dp[mi][ni] = [];
  dp[mi][ni] = val;
}

function getVal(dp, mi, ni) {
  return dp?.[mi]?.[ni] ?? 0;
}

function method1(matrix) {
  const dp = [];

  let n = matrix[0].length;
  let m = matrix.length;
  let ni = 0;
  let mi = 0;
  while (ni < n && mi < m) {
    if (mi === 0 && ni === 0) {
      setMatrix(dp, mi, ni, 1);
      ni++;
      continue;
    }

    if (matrix[mi][ni] === 0) {
      if (mi > 0 && ni > 0) {
        setMatrix(dp, mi, ni, getVal(dp, mi - 1, ni), getVal(dp, mi, ni - 1));
      } else {
        setMatrix(dp, mi, ni, getVal(dp, mi, ni - 1));
      }
      ni++;
      continue;
    }

    mi++;
    ni--;
  }

  return dp;
}

console.log(method1(example));
