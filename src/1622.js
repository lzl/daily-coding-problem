function longestSubstring(s, k) {
  let subString = "";

  for (let i = 0; i < s.length; i++) {
    const chars = [];

    let j = 0;
    let d = 0;
    while (true) {
      const char = s[i + j];
      if (!char) break;

      if (chars.includes(char)) {
        chars.push(char);
        j++;
        d++;
        continue;
      } else {
        if (chars.length >= k + d) {
          j = 0;
          d = 0;
          break;
        } else {
          chars.push(char);
        }
      }

      j++;
    }

    if (subString.length < chars.length) {
      subString = chars.join("");
    }
  }

  return subString;
}

console.log("result:", longestSubstring("abcba", 2));
