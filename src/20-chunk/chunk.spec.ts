import { describe, expect, test } from "vitest";
import { chunk } from "./chunk";

describe('chunk', () => {
  test('should return an array of arrays', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = chunk(arr, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  })

  test('should return an empty array if the array is empty', () => {
    const arr: any[] = [];
    const result = chunk(arr, 2);
    expect(result).toEqual([]);
  })
})