// https://chat.openai.com/share/c1ae5595-41ba-47a6-839f-b78fe097beae

function partitionList(list, x) {
  const len = list.length - 1;
  let low = 0;
  let mid = 0;
  let high = len;

  while (mid <= high) {
    if (list[mid] < x) {
      const tmp = list[low];
      list[low] = list[mid];
      list[mid] = tmp;
      low++;
      mid++;
    } else if (list[mid] > x) {
      const tmp = list[high];
      list[high] = list[mid];
      list[mid] = tmp;
      high--;
    } else {
      mid++;
    }
  }

  return list;
}

console.log(partitionList([0, 2, 3, 1], 1));
