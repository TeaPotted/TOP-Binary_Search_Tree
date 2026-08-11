import { Tree } from "./tree.js";

// returns an array of random numbers depending on n
function randomNumbers(n) {
  const nums = [];

  // push a random number less than 100 to nums, for n of times
  for (let i = 0; i < n; i++) {
    nums.push(Math.floor(Math.random() * 100));
  }
  return nums;
}

// 1. Create a binary search tree from an array of random numbers with each element having a value less than 100
const t = new Tree([1, 6, 9, 7, 3]);
t.printTree();

// 2. Confirm that the tree is balanced by calling isBalanced()
console.log(t.isBalanced());

// 3. Print out all elements in level, pre, post, and in order
console.log("level order:");
t.levelOrderForEach((node) => console.log(node.data));
console.log("\npre order:");
t.preOrderForEach((node) => console.log(node.data));
console.log("\npost order:");
t.postOrderForEach((node) => console.log(node.data));
console.log("\nin order:");
t.inOrderForEach((node) => console.log(node.data));

// 4. Unbalance the tree by adding several numbers whose value is more than 100
t.insert(101)
t.insert(102)
t.insert(103)
t.printTree()

// 5. Confirm that the tree is unbalanced by calling isBalanced()
console.log(t.isBalanced())
console.log()

// 6. Balance the tree by calling rebalance()
t.rebalance()
t.printTree()

// 7. Confirm that the tree is balanced by calling isBalanced()
console.log(t.isBalanced())
console.log()

// 8. Print out all elements in level, pre, post, and in order
console.log("level order:");
t.levelOrderForEach((node) => console.log(node.data));
console.log("\npre order:");
t.preOrderForEach((node) => console.log(node.data));
console.log("\npost order:");
t.postOrderForEach((node) => console.log(node.data));
console.log("\nin order:");
t.inOrderForEach((node) => console.log(node.data));