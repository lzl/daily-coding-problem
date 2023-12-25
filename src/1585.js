function solution(num) {
  const allNum = Array.from({ length: num }, (_, i) => i + 1)

  let result = new Set(allNum)
  let base = 2
  let multiple = 2

  while (base < num) {
    const mark = base * multiple

    if (mark > num) {
      base += 1
      multiple = 2
      continue
    }

    result.delete(mark)
    multiple += 1
  }

  return result
}

console.log(solution(100))
// big O is O(N)
