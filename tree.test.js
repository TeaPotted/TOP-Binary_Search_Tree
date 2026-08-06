import { Tree } from "./tree.js";

test("Tree.includes(value) returns true if the given value is in the tree", () => {
  const t = new Tree([1, 5, 3, 9]);
  expect(t.includes(9)).toBe(true);
});

test("Tree.includes(value) returns false if the given value is not in the tree", () => {
  const t = new Tree([1, 5, 3, 9]);
  expect(t.includes(10)).toBe(false);
});

test("Tree.insert(value) inserts a new value to the tree and also preserves the “binary search” property", () => {
  const t = new Tree([1, 5, 9, 2]);
  t.insert(8);
  expect(t.root).toMatchObject({
    _data: 2,
    _left: { _data: 1, _left: null, _right: null },
    _right: {
      _data: 5,
      _left: null,
      _right: {
        _data: 9,
        _left: { _data: 8, _left: null, _right: null },
        _right: null,
      },
    },
  });
});

test("Tree.insert(value) does nothing if value already exists in the tree", () => {
  const t = new Tree([1]);
  t.insert(1);
  expect(t.root).toMatchObject({
    _data: 1,
    _left: null,
    _right: null,
  });
});

test("Tree.deleteItem(value) removes a node with no children,", () => {
  const t = new Tree([1, 9, 5, 2]);
  t.deleteItem(1);
  expect(t.root).toMatchObject({
    _data: 2,
    _left: null,
    _right: {
      _data: 5,
      _left: null,
      _right: { _data: 9, _left: null, _right: null },
    },
  });
});

test("Tree.deleteItem(value) removes a node with one child by replacing itself with it's child", () => {
  const t = new Tree([1, 9, 5, 2]);
  t.deleteItem(5);
  expect(t.root).toMatchObject({
    _data: 2,
    _left: { _data: 1, _left: null, _right: null },
    _right: { _data: 9, _left: null, _right: null },
  });

  const t2 = new Tree([1, 9, 5, 2]);
  t2.insert(0);
  t2.deleteItem(1);
  expect(t2.root).toMatchObject({
    _data: 2,
    _left: { _data: 0, _left: null, _right: null },
    _right: {
      _data: 5,
      _left: null,
      _right: { _data: 9, _left: null, _right: null },
    },
  });
});

test("Tree.deleteItem(value) removes a node with two children by replacing itself with it's inorder successor", () => {
  const t = new Tree([1, 9, 5, 2]);
  t.deleteItem(2);
  expect(t.root).toMatchObject({
    _data: 5,
    _left: { _data: 1, _left: null, _right: null },
    _right: { _data: 9, _left: null, _right: null },
  });
});

test("Tree.deleteItem(value) does nothing if the given value doesn't exist in tree", () => {
  const t = new Tree([1, 9, 5, 2]);

  t.deleteItem(8);
  expect(t.root).toMatchObject({
    _data: 2,
    _left: { _data: 1, _left: null, _right: null },
    _right: {
      _data: 5,
      _left: null,
      _right: { _data: 9, _left: null, _right: null },
    },
  });
});

test("Tree.levelOrderForEach(callback) traverses the tree in breadth-first level order and calls the callback on each value as it traverses", () => {
  const mockCallback = jest.fn((n) => n.data);
  const t = new Tree([1, 2, 3]);
  t.insert(4);
  t.levelOrderForEach(mockCallback);

  expect(mockCallback.mock.calls).toHaveLength(4);
  expect(mockCallback.mock.results[0].value).toBe(2);
  expect(mockCallback.mock.results[1].value).toBe(1);
  expect(mockCallback.mock.results[2].value).toBe(3);
  expect(mockCallback.mock.results[3].value).toBe(4);
});

test("Tree.levelOrderForEach(callback) throws an Error if function is called without a callback", () => {
  const t = new Tree([1, 2, 3]);
  expect(t.levelOrderForEach).toThrow(new Error("Callback is required!"));
});

test("Tree.preOrderForEach(callback) traverses the tree using pre-order traversal and calls the callback on each value as it traverses", () => {
  const mockCallback = jest.fn((n) => n.data);
  const t = new Tree([1, 0, 3, 2, 6]);

  t.preOrderForEach(mockCallback);
  expect(mockCallback.mock.results[0].value).toBe(2);
  expect(mockCallback.mock.results[1].value).toBe(0);
  expect(mockCallback.mock.results[2].value).toBe(1);
  expect(mockCallback.mock.results[3].value).toBe(3);
  expect(mockCallback.mock.results[4].value).toBe(6);
});

test("Tree.preOrderForEach(callback) throws an error if function is called without a callback", () => {
  const t = new Tree([1, 2, 3]);
  expect(() => t.preOrderForEach()).toThrow(
    new Error("Callback is required!"),
  );
});
