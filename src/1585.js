function solution(num) {
  const allNum = Array.from({ length: num - 1 }, (_, i) => i + 2); // 0 and 1 are not prime numbers

  let result = new Set(allNum);
  let base = 2;
  let multiple = 2;

  while (base < num) {
    const mark = base * multiple;

    if (mark > num) {
      base += 1;
      multiple = 2;
      continue;
    }

    result.delete(mark);
    multiple += 1;
  }

  return [...result];
}

console.log(solution(100));
// big O is O(N)

function sieveOfEratosthenes(N) {
  let primes = [];
  let isPrime = Array(N).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

  for (let p = 2; p * p <= N; p++) {
    if (isPrime[p]) {
      console.log("p:", p);
      for (let i = p * p; i < N; i += p) {
        console.log("i:", i);
        isPrime[i] = false;
      }
    }
  }

  // Extracting prime numbers
  for (let p = 2; p < N; p++) {
    if (isPrime[p]) {
      primes.push(p);
    }
  }

  return primes;
}

// Example: Find all primes less than 100
console.log(sieveOfEratosthenes(100));
