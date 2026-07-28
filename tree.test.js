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
