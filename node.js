class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  // create setter and getter functions for data, left and right attributes
  set data(val) {
    this._data = val;
  }

  get data() {
    return this._data;
  }

  set left(val) {
    this._left = val;
  }

  get left() {
    return this._left;
  }

  set right(val) {
    this._right = val;
  }

  get right() {
    return this._right;
  }
}

export { Node };
