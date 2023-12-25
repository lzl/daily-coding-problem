// https://chat.openai.com/share/d5a9415e-a3a8-45bc-a928-8ea3d6bc69b9

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
      for (let i = p * p; i < N; i += p) {
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

function linearSieveOfEratosthenes(N) {
  let primes = [];
  let isPrime = Array(N).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i < N; i++) {
    console.log("i:", i);
    if (isPrime[i]) {
      console.log("primes.push:", i);
      primes.push(i);
    }
    for (let j = 0; j < primes.length && i * primes[j] < N; j++) {
      console.log(
        "j:",
        j,
        "i:",
        i,
        "primes[j]:",
        primes[j],
        "i * primes[j]:",
        i * primes[j]
      );
      isPrime[i * primes[j]] = false;
      if (i % primes[j] === 0) break;
    }
  }

  return primes;
}

// Example usage
console.log(linearSieveOfEratosthenes(100));

function* primeGenerator() {
  let primes = []; // Array to store prime numbers
  let num = 2; // Starting number

  while (true) {
    let isPrime = true;
    for (let prime of primes) {
      if (prime * prime > num) {
        break; // No need to check beyond the square root of num
      }
      if (num % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
      yield num;
    }
    num++;
  }
}

// Example usage:
let generator = primeGenerator();
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 5
// ... and so on
