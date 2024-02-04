function LinkedList(value) {
  this.value = value;
  this.next = null;
}

const node = new LinkedList(1);
node.next = new LinkedList(2);
node.next.next = new LinkedList(3);
node.next.next.next = new LinkedList(4);
node.next.next.next.next = new LinkedList(5);

function fromListToArray(list) {
  const arr = [];
  let node = list;
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  return arr;
}

function fromArrayToList(arr) {
  const list = new LinkedList(arr[0]);
  let node = list;
  for (let i = 1; i < arr.length; i++) {
    node.next = new LinkedList(arr[i]);
    node = node.next;
  }
  return list;
}

function sumList(l1, l2) {
  const n1 = +fromListToArray(l1).reverse().join("");
  const n2 = +fromListToArray(l2).reverse().join("");
  const sum = n1 + n2;
  return fromArrayToList(
    `${sum}`
      .split("")
      .reverse()
      .map((n) => +n)
  );
}

const l1 = new LinkedList(9);
l1.next = new LinkedList(9);
const l2 = new LinkedList(5);
l2.next = new LinkedList(2);
console.log(sumList(l1, l2));
