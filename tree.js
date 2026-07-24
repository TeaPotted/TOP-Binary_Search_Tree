import { Node } from "./node.js";

class Tree {
  constructor(array) {
    // make sure that array has no duplicates and is sorted
    this.array = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.#buildTree(this.array, 0, array.length - 1);
  }

  // buildTree(array) takes an array of numbers and turns it into a balanced binary tree full of Node objects appropriately placed
  // it should return the level-0 root node
  #buildTree(arr, start, end) {
    if (start > end) return null;

    // find the middle of the array and make it the root of the tree
    const mid = start + Math.floor((end - start) / 2);
    const root = new Node(arr[mid]);

    // then recursively repeat the same process for the left subarray (to form the left subtree)
    //  and right subarray (to form the right subtree)
    root.left = this.#buildTree(arr, start, mid - 1);
    root.right = this.#buildTree(arr, mid + 1, end);

    return root;
  }

  // prettyPrint() will be used to visualize the binary search tree
  #prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.#prettyPrint(
      node.right,
      `${prefix}${isLeft ? "│   " : "    "}`,
      false,
    );
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.#prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }

  // printTree() logs the binary search tree in a structured format
  printTree() {
    this.#prettyPrint(this.root)
  }

  // includes(value) returns true if the given value is in the tree. else, it should return false
  includes(value) {
    return this.array.includes(value);
  }

}

export { Tree };
