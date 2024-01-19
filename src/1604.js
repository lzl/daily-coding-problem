function TreeNode(value) {
  this.value = value;
  this.left = this.right = null;
}

const root = new TreeNode(7);
root.left = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(5);
root.right = new TreeNode(10);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(12);

const target = 6;

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
  const root = node.value;
  if (target < root) {
    const floor = findFloorInBST(node);
    const ceiling = root;
    return { floor, ceiling };
  } else if (target > root) {
    const floor = root;
    const ceiling = findCeilingInBST(node);
    return { floor, ceiling };
  } else {
    return { floor: root, ceiling: root };
  }
}

console.log(findInBST(root, target));

function findFloorAndCeiling(root, integer) {
  let floor = null;
  let ceiling = null;
  let currentNode = root;

  while (currentNode !== null) {
    if (currentNode.value === integer) {
      return { floor: integer, ceiling: integer };
    }

    if (currentNode.value < integer) {
      floor = currentNode.value;
      currentNode = currentNode.right;
    } else {
      ceiling = currentNode.value;
      currentNode = currentNode.left;
    }
  }

  return { floor, ceiling };
}

const result = findFloorAndCeiling(root, target);
console.log(result); // Should show { floor: 5, ceiling: 7 }
