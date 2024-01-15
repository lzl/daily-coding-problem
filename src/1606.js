function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Example Usage:
// Creating a simple tree:
//         1
//        / \
//       2   3
//      /
//     4
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

function isHB(node) {
  if (node == null) {
    return [true, 0];
  }

  const [isLeftBalanced, leftHeight] = isHB(node.left);
  const [isRightBalanced, rightHeight] = isHB(node.right);

  const currentHeight = Math.max(leftHeight, rightHeight) + 1;

  if (leftHeight - rightHeight <= 1) {
    return [true, currentHeight];
  } else {
    return [false, currentHeight];
  }
}

console.log(isHB(root));

function isHeightBalanced(root) {
  function checkBalance(node) {
    if (node === null) {
      return { balanced: true, height: 0 };
    }

    let left = checkBalance(node.left);
    let right = checkBalance(node.right);

    let balanced =
      left.balanced &&
      right.balanced &&
      Math.abs(left.height - right.height) <= 1;
    let height = Math.max(left.height, right.height) + 1;

    return { balanced: balanced, height: height };
  }

  return checkBalance(root).balanced;
}

// Check if the tree is height-balanced
console.log(isHeightBalanced(root)); // Should output true or false
