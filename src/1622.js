// https://chat.openai.com/share/8e4085b3-fc87-4b6f-8637-17e1ad123b1a

function longestSubstringWithKDistinctChars(s, k) {
  if (k === 0 || s.length === 0) return "";

  let left = 0,
    maxLength = 0,
    startOfMaxSubstr = 0;
  const charFrequency = {};

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = s[left];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      left += 1;
    }

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      startOfMaxSubstr = left;
    }
  }

  return s.substring(startOfMaxSubstr, startOfMaxSubstr + maxLength);
}

// Example usage
const s = "abcba";
const k = 2;
console.log(longestSubstringWithKDistinctChars(s, k)); // Output will be "bcb"
