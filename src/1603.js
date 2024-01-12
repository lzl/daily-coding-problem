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

// Example usage
let N = 5;
console.log(`Total set bits from 1 to ${N}:`, countSetBits(N));
