import {describe, test, expect} from "vitest";
import ArrayWrapper from "./arrayWrapper";
describe("ArrayWrapper", () => {
  test("sum of two arrayWrapper, should return 10", () => {
    const a = new ArrayWrapper([1, 2]);
    const b = new ArrayWrapper([3, 4]);
    expect(a.add(b)).toBe(10);
  });

  test("can stringify", () => {
    const a = new ArrayWrapper([1, 2]);
    expect(String(a)).toBe("[1,2]");
  });
});