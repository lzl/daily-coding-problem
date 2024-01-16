// https://chat.openai.com/share/1e8aa9fb-9f69-4420-aa1b-7fee44168cd0

function isOneToOneMapping(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const map_s1 = {};
  const map_s2 = {};

  for (let i = 0; i < s1.length; i++) {
    const c1 = s1[i];
    const c2 = s2[i];

    if (c1 in map_s1 && map_s1[c1] !== c2) {
      return false;
    }

    if (c2 in map_s2 && map_s2[c2] !== c1) {
      return false;
    }

    map_s1[c1] = c2;
    map_s2[c2] = c1;
  }

  return true;
}

console.log(isOneToOneMapping("abc", "bcd"));
