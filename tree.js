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
    this.#prettyPrint(this.root);
  }

  // includes(value) returns true if the given value is in the tree. else, it should return false
  includes(value) {
    let curr = this.root;

    // move left if the value is smaller than the current node. if value is bigger than current node, move right.
    while (curr !== null) {
      if (value < curr.data && curr.left !== null) {
        curr = curr.left;
      } else if (value > curr.data && curr.right !== null) {
        curr = curr.right;
      } else break; // else, meaning value === curr.data or have reached end of tree
    }

    if (curr.data === value) return true;
    return false;
  }

  // insert(value) that inserts a new node with that value into the tree.
  insert(value) {
    // if value already exists, do nothing
    if (this.includes(value)) return;

    // if tree is empty, set root to a newly created Node using value
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    // find the node who is going to have the new node as it's child
    let curr = this.root;
    while (curr !== null) {
      if (curr.data > value && curr.left !== null) {
        curr = curr.left;
      } else if (curr.data < value && curr.right !== null) {
        curr = curr.right;
      } else break;
    }

    // if value is smaller, make it left child. else, right child
    if (value < curr.data) curr.left = new Node(value);
    else curr.right = new Node(value);
  }
}

export { Tree };
