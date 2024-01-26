// https://chat.openai.com/share/3d44a729-35f5-49de-9443-031823e16be8

function simulateDominoes(dominoes) {
  let changed;
  do {
    changed = false;
    let newDominoes = dominoes.split("");

    for (let i = 0; i < dominoes.length; i++) {
      if (dominoes[i] === ".") {
        if (
          i > 0 &&
          dominoes[i - 1] === "R" &&
          (i === dominoes.length - 1 || dominoes[i + 1] !== "L")
        ) {
          newDominoes[i] = "R";
          changed = true;
        } else if (
          i < dominoes.length - 1 &&
          dominoes[i + 1] === "L" &&
          (i === 0 || dominoes[i - 1] !== "R")
        ) {
          newDominoes[i] = "L";
          changed = true;
        }
      }
    }

    dominoes = newDominoes.join("");
  } while (changed);

  return dominoes;
}

// Test the function
console.log(simulateDominoes(".L.R....L")); // Should return "LL.RRRLLL"
console.log(simulateDominoes("..R...L.L")); // Should return "..RR.LLLL"

function pushDominoes(dominoes) {
  const n = dominoes.length;
  const forces = new Array(n).fill(0);

  let force = 0;
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === "R") {
      force = n;
    } else if (dominoes[i] === "L") {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] += force;
  }

  force = 0;
  for (let i = n - 1; i > -1; i--) {
    if (dominoes[i] === "L") {
      force = n;
    } else if (dominoes[i] === "R") {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] -= force;
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    if (forces[i] > 0) {
      result += "R";
    } else if (forces[i] < 0) {
      result += "L";
    } else {
      result += ".";
    }
  }

  return result;
}

// Test the function
console.log(pushDominoes(".L.R....L")); // Should return "LL.RRRLLL"
console.log(pushDominoes("..R...L.L")); // Should return "..RR.LLLL"
