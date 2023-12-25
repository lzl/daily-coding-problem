class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function bottomView(root) {
  if (!root) return [];

  let queue = [];
  let hdNodeMap = new Map();

  // Start with the root node and an initial horizontal distance of 0
  queue.push({ node: root, hd: 0 });

  while (queue.length > 0) {
      let { node, hd } = queue.shift();

      // Store or update the node for this horizontal distance
      hdNodeMap.set(hd, node.value);

      // Add children to the queue with their respective horizontal distances
      if (node.left) queue.push({ node: node.left, hd: hd - 1 });
      if (node.right) queue.push({ node: node.right, hd: hd + 1 });
  }

  // Extract the bottom view from the map and sort by horizontal distance
  let bottomView = Array.from(hdNodeMap.entries())
                        .sort((a, b) => a[0] - b[0])
                        .map(entry => entry[1]);

  return bottomView;
}

// Example usage:
let root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(9);
root.left.left.left = new Node(0);
root.right.right.left = new Node(8);

console.log(bottomView(root));  // Expected output: [0, 1, 3, 6, 8, 9]
