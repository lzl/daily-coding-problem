// https://chat.openai.com/share/fad27ab8-b3ee-47f5-bc1d-a298cb7252b6

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

console.log("1:", countSetBitsNaive(N));

function countSetBits2(N) {
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

console.log("2:", countSetBits2(N));

function countSetBits3(N) {
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
    totalSetBits += Math.max(0, partialCycleLength - (step >> 1) + 1);
  }

  return totalSetBits;
}

console.log("3:", countSetBits3(N));
