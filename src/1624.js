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
