let N = 5;

function countSetBitsNaive(N) {
  let totalSetBits = 0;

  for (let number = 1; number <= N; number++) {
    totalSetBits += countBitsInNumber(number);
  }

  return totalSetBits;
}

function countBitsInNumber(number) {
  let count = 0;
  while (number) {
    count += number & 1; // Increment count if the last bit is set
    number >>= 1; // Shift right to check the next bit
  }
  return count;
}

console.log(
  `Total set bits from 1 to ${N} (Naive Approach):`,
  countSetBitsNaive(N)
);

function countSetBits(N) {
  let totalSetBits = 0;

  for (
    let bitPosition = 0;
    bitPosition <= Math.floor(Math.log2(N));
    bitPosition++
  ) {
    let step = 1 << (bitPosition + 1); // 2^(bitPosition + 1)
    let fullCycleCount = Math.floor(N / step);
    totalSetBits += fullCycleCount * (step >> 1); // fullCycleCount * (step / 2)

    let partialCycleLength = N % step;
    totalSetBits += Math.max(0, partialCycleLength - (step >> 1));
  }

  return totalSetBits;
}

console.log(`Total set bits from 1 to ${N}:`, countSetBits(N));
