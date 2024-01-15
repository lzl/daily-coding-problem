const root = {
  left: {
    left: {},
  },
  right: {},
};

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
