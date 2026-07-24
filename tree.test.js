import { Tree } from "./tree.js";

test("Tree.includes(value) returns true if the given value is in the tree", () => {
  const t = new Tree([1, 5, 3, 9])
  expect(t.includes(9)).toBe(true);
})

test("Tree.includes(value) returns false if the given value is not in the tree", () => {
  const t = new Tree([1, 5, 3, 9])
  expect(t.includes(10)).toBe(false);
})