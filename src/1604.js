function Tree(value) {
  this.value = value;
  this.left = this.right = null;
}

const node = new Tree(5);
node.left = new Tree(3);
node.left.left = new Tree(2);
node.left.right = new Tree(4);
node.right = new Tree(7);
node.right.left = new Tree(6);
node.right.right = new Tree(8);

function findNodeInBST(node, target) {
  if (!node) return null;
  if (node.value === target) return node;
  return findNodeInBST(node.left, target) || findNodeInBST(node.right, target);
}

function findFloorInBST(node) {
  let target = node.left;
  while (target.right) {
    target = target.right;
  }
  return target.value;
}

function findCeilingInBST(node) {
  let target = node.right;
  while (target.left) {
    target = target.left;
  }
  return target.value;
}

function findInBST(node, target) {
  const targetNode = findNodeInBST(node, target);
  if (!targetNode) return null;

  const floor = findFloorInBST(targetNode);
  const ceiling = findCeilingInBST(targetNode);

  return { floor, ceiling };
}

console.log(findInBST(node, 3));
