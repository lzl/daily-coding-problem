// https://chat.openai.com/share/77b9016d-0606-4c74-b6dc-10577f3f2a49

function areSentencesEquivalent(synonyms, sentence1, sentence2) {
  // Split sentences into words
  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");

  // Check if both sentences have the same number of words
  if (words1.length !== words2.length) {
    return false;
  }

  // Create a map for quick lookup of synonyms
  const synonymMap = new Map();

  // Populate the map with synonyms
  synonyms.forEach((pair) => {
    const [word1, word2] = pair;
    if (!synonymMap.has(word1)) synonymMap.set(word1, new Set());
    if (!synonymMap.has(word2)) synonymMap.set(word2, new Set());
    synonymMap.get(word1).add(word2);
    synonymMap.get(word2).add(word1);
  });

  // Compare each word in the sentences
  for (let i = 0; i < words1.length; i++) {
    if (words1[i] === words2[i]) {
      continue;
    }

    if (
      !synonymMap.has(words1[i]) ||
      !synonymMap.get(words1[i]).has(words2[i])
    ) {
      return false;
    }
  }

  return true;
}

// Example usage
const synonyms = [
  ["eat", "consume"],
  ["big", "large"],
];
const sentence1 = "He wants to eat food";
const sentence2 = "He wants to consume food";

console.log(areSentencesEquivalent(synonyms, sentence1, sentence2)); // Should output true

class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  find(word) {
    if (!this.parent.has(word)) {
      this.parent.set(word, word);
    } else if (this.parent.get(word) !== word) {
      this.parent.set(word, this.find(this.parent.get(word)));
    }
    return this.parent.get(word);
  }

  union(word1, word2) {
    let parent1 = this.find(word1);
    let parent2 = this.find(word2);
    if (parent1 !== parent2) {
      this.parent.set(parent1, parent2);
    }
  }
}

function areSentencesEquivalent2(synonyms, sentence1, sentence2) {
  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");

  if (words1.length !== words2.length) {
    return false;
  }

  const unionFind = new UnionFind();

  // Group synonyms into equivalence classes
  synonyms.forEach((pair) => {
    unionFind.union(pair[0], pair[1]);
  });

  // Compare each word in the sentences
  for (let i = 0; i < words1.length; i++) {
    if (
      words1[i] !== words2[i] &&
      unionFind.find(words1[i]) !== unionFind.find(words2[i])
    ) {
      return false;
    }
  }

  return true;
}

{
  function runTestCases() {
    const testCases = [
      {
        synonyms: [
          ["big", "large"],
          ["large", "huge"],
        ],
        sentence1: "He saw a big tree",
        sentence2: "He saw a huge tree",
        expected: true,
      },
      {
        synonyms: [
          ["happy", "joyful"],
          ["sad", "unhappy"],
        ],
        sentence1: "She is happy today",
        sentence2: "She is sad today",
        expected: false,
      },
      {
        synonyms: [],
        sentence1: "It is raining",
        sentence2: "It is sunny",
        expected: false,
      },
      {
        synonyms: [
          ["start", "begin"],
          ["begin", "commence"],
          ["commence", "initiate"],
        ],
        sentence1: "Let's start the show",
        sentence2: "Let's initiate the show",
        expected: true,
      },
      {
        synonyms: [["fast", "quick"]],
        sentence1: "",
        sentence2: "",
        expected: true,
      },
      {
        synonyms: [["fast", "quick"]],
        sentence1: "fast",
        sentence2: "quick",
        expected: true,
      },
      {
        synonyms: [["eat", "consume"]],
        sentence1: "He wants to eat",
        sentence2: "He wants to",
        expected: false,
      },
    ];

    testCases.forEach((test, index) => {
      const result = areSentencesEquivalent2(
        test.synonyms,
        test.sentence1,
        test.sentence2
      );
      console.log(
        `Test Case ${index + 1}: ${
          result === test.expected ? "Passed" : "Failed"
        }`
      );
    });
  }

  runTestCases();
}
