function Node(val) {
  this.val = val;
  this.next = null;
}

function sumNode(l1, l2) {
  const result = new Node();

  let carry = 0;
  let list = result;
  while (l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    list.next = new Node(sum);
    list = list.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return result.next;
}

const l1 = new Node(9);
l1.next = new Node(9);
const l2 = new Node(5);
l2.next = new Node(2);
l2.next.next = new Node(1);

console.log(sumNode(l1, l2));
