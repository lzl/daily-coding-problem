function checkIfSentencesAreEquivalent(synonyms, s1, s2) {
  const dict = {};
  for (let i = 0; i < synonyms.length; i++) {
    const [key, value] = synonyms[i];
    dict[key] = value;
  }

  const a1 = s1.split(" ");
  const a2 = s2.split(" ");

  if (a1.length !== a2.length) {
    return false;
  }

  for (let i = 0; i < a1.length; i++) {
    const str = a1[i];
    if (dict[str]) {
      a1[i] = dict[str];
    }
  }

  for (let i = 0; i < a2.length; i++) {
    const str = a2[i];
    if (dict[str]) {
      a2[i] = dict[str];
    }
  }

  return a1.join(" ") === a2.join(" ");
}

console.log(
  checkIfSentencesAreEquivalent(
    [
      ["big", "large"],
      ["eat", "consume"],
    ],
    "He wants to eat food.",
    "He wants to consume food."
  )
);
