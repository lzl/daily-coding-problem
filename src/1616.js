function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(num) {
  const next = num + 1;
  if (isPrime(next)) {
    return next;
  }
  return nextPrime(num);
}

function splitEvenNum(num) {
  let left = 2;
  let right = 0;

  let loading = true;
  while (loading) {
    right = num - left;
    if (isPrime(right)) {
      break;
    } else {
      left = nextPrime(left);
    }
  }

  return [left, right];
}

console.log(splitEvenNum(8));
