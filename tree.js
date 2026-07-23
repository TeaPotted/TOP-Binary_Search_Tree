class Tree {
  constructor(array) {
    // make sure that array has no duplicates and is sorted
    this.array = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree();
  }

}
