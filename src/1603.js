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
  let bitPosition = 0;

  while (1 << bitPosition <= N) {
    // 'bit' is the value of the bit in current bit position (either 0 or 1)
    let bit = 0;
    let change = 1 << bitPosition; // The interval after which the bit changes

    for (let i = 0; i <= N; i++) {
      totalSetBits += bit;
      if (--change == 0) {
        // When the counter goes down to 0, flip the bit and reset the counter
        bit = !bit;
        change = 1 << bitPosition;
      }
    }

    bitPosition++;
  }

  return totalSetBits;
}

console.log(`Total set bits from 1 to ${N}:`, countSetBits(N));
