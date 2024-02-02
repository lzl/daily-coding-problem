function stepsToKaprekarConstant(num) {
  if (typeof num !== "number") {
    throw new Error("a");
  }

  const wholeNumberArr = `${num}`.split("");

  if (wholeNumberArr.length !== 4) {
    throw new Error("b");
  }

  const distinctNumberArr = [...new Set(wholeNumberArr)];
  if (wholeNumberArr.length - distinctNumberArr.length > 1) {
    throw new Error("c");
  }

  const target = 6174;
  let steps = 0;
  let result = num;

  while (result !== target) {
    const arr = `${result}`.split("");
    const asc = [...arr].sort((a, b) => a - b);
    const desc = [...arr].sort((a, b) => b - a);
    result = +desc.join("") - +asc.join("");
    steps++;
  }

  return steps;
}

console.log(stepsToKaprekarConstant(1234));

function kaprekarSteps(n) {
  let steps = 0;
  while (n !== 6174) {
    // Convert number to array of digits, then sort ascending and descending
    let digits = n.toString().split("");
    let max = parseInt(digits.sort((a, b) => b - a).join(""), 10);
    let min = parseInt(digits.sort((a, b) => a - b).join(""), 10);
    // Subtract smaller number from larger and update n
    n = max - min;
    steps++;
  }
  return steps;
}

// Example to test the function
let stepsTo6174 = kaprekarSteps(1234);
console.log(stepsTo6174);
