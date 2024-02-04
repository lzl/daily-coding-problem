// https://chat.openai.com/share/b7ded180-de5c-47f9-9264-c3d985003004

function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 != null ? l1.val : 0;
    let y = l2 != null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

const l1 = new ListNode(9);
l1.next = new ListNode(9);
const l2 = new ListNode(5);
l2.next = new ListNode(2);

console.log(addTwoNumbers(l1, l2));
