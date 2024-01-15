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

// Test cases for the isHeightBalanced function
function testIsHeightBalanced() {
  // Test Case 1: A balanced tree
  let root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  root1.left.left = new TreeNode(4);
  root1.left.right = new TreeNode(5);
  console.log("Test Case 1 - Expected: true, Actual:", isHeightBalanced(root1));

  // Test Case 2: An unbalanced tree
  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.left.left = new TreeNode(3);
  root2.left.left.left = new TreeNode(4);
  console.log(
    "Test Case 2 - Expected: false, Actual:",
    isHeightBalanced(root2)
  );

  // Test Case 3: An empty tree
  let root3 = null;
  console.log("Test Case 3 - Expected: true, Actual:", isHeightBalanced(root3));

  // Test Case 4: A tree with only one node
  let root4 = new TreeNode(1);
  console.log("Test Case 4 - Expected: true, Actual:", isHeightBalanced(root4));

  // Test Case 5: A balanced tree with multiple levels
  let root5 = new TreeNode(1);
  root5.left = new TreeNode(2);
  root5.right = new TreeNode(3);
  root5.left.left = new TreeNode(4);
  root5.left.right = new TreeNode(5);
  root5.right.left = new TreeNode(6);
  root5.right.right = new TreeNode(7);
  console.log("Test Case 5 - Expected: true, Actual:", isHeightBalanced(root5));
}

testIsHeightBalanced();
