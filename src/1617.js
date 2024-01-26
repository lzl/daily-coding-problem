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
