// https://chat.openai.com/share/d3366fd5-f518-4351-bf6b-43588338d9d8

function findNthSevenishNumber(n) {
  let sevenishNumber = 0;
  let power = 0;

  while (n > 0) {
    // Check if the least significant bit of n is 1
    if (n % 2 === 1) {
      // Add the corresponding power of 7 to the sevenish number
      sevenishNumber += Math.pow(7, power);
    }

    // Move to the next bit (right shift in binary)
    n = Math.floor(n / 2);

    // Increase the power for the next iteration
    power++;
  }

  return sevenishNumber;
}

// Example usage
let n = 5;
console.log("The " + n + "th sevenish number is: " + findNthSevenishNumber(n));
