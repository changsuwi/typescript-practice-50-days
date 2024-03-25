import { describe, expect, test } from "vitest";
import { dropWhile } from "./dropWhile";

describe("dropWhile", () => {
  test("should drop value < 4, return [4,5,6]", () => {
    expect(
      dropWhile([1, 2, 3, 4, 5, 6], (value: any) => value < 4)
    ).toStrictEqual([4, 5, 6]);
  });

  test("should drop value < 5, return []", () => {
    expect(dropWhile([1, 2, 3], (value: any) => value < 5)).toStrictEqual([]);
  });

  test("give empty array, should return empty array", () => {
    expect(dropWhile([], (value: any) => value < 5)).toStrictEqual([]);
  });

  test("there is a element not fulfill predicate function in the middle, should return [6, 1, 2]", () => {
    expect(dropWhile([0, 6, 1, 2], (value) => value < 5)).toStrictEqual([
      6, 1, 2,
    ]);
  });
});
