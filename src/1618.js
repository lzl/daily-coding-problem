function findNthSevenishNumber(n) {
  let sevenishNumber = 0;
  let power = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      sevenishNumber += Math.pow(7, power);
    }

    n = n >> 1;
    power += 1;
  }

  return sevenishNumber;
}

for (let i = 0; i < 10; i++) {
  console.log(findNthSevenishNumber(i));
}
