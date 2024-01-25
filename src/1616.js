function findGoldbachPrimes(number) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= number / 2; i++) {
    if (isPrime(i) && isPrime(number - i)) {
      return [i, number - i];
    }
  }

  return null; // In theory, this should never happen as per Goldbach's conjecture
}

// Example usage
console.log(findGoldbachPrimes(10)); // Output: [3, 7]
