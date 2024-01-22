// https://www.geeksforgeeks.org/lexicographically-smallest-string-by-repeatedly-moving-one-of-first-k-characters-to-end/

function smallestLexString(str, k) {
  let present = new Map();
  let bigCh;
  let maxIndex = 0;

  if (k <= 0) {
    return str;
  } else if (k >= str.length) {
    let strChars = str.split("");
    strChars.sort();
    return strChars.join("");
  }

  while (!present.has(str)) {
    bigCh = "A";

    for (let i = 0; i < k; i++) {
      if (bigCh < str.charAt(i)) {
        maxIndex = i;
        bigCh = str.charAt(i);
      }
    }

    present.set(str, true);
    str =
      str.substring(0, maxIndex) +
      str.substring(maxIndex + 1, str.length) +
      bigCh;
  }

  let keys = [...present.keys()];
  keys.sort();
  return keys[0];
}

// Driver's code
let str = "geeksforgeeks";
let k = 2;

// Function call
console.log(smallestLexString(str, k));
