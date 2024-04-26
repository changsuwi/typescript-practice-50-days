import { describe, expect, test, } from "vitest";
import { flat } from "./flatten";

describe('flatten deeply nested array', () => {
  test('should return an number array ', () => {
    const arr = [1, 2, 3, [4, 5]];
    const flattenedArr = flat(arr, 1);
    expect(flattenedArr).toEqual([1, 2, 3, 4, 5]);
  })

  test('should return an array equal to the input array if the depth is 0', () => {
    const arr = [1, 2, 3, [4, 5]];
    const flattenedArr = flat(arr, 0);
    expect(flattenedArr).toEqual(arr);
  })

  test('should flatten array which is smaller than the depth', () => {
    const arr = [1, 2, 3, [4, 5, [6, 7]]];
    const flattenedArr = flat(arr, 1);
    expect(flattenedArr).toEqual([1, 2, 3, 4, 5, [6, 7]]);
  })

  test('should flatten array which is larger than the depth', () => {
    const arr = [1, 2, 3, [4, 5, [6, 7]]];
    const flattenedArr = flat(arr, 30);
    expect(flattenedArr).toEqual([1, 2, 3, 4, 5, 6, 7]);
  })

  test('should flatten array which is completely flattened', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const flattenedArr = flat(arr, 2);
    expect(flattenedArr).toEqual(arr);
  })

  test('should flatten array which contains any type of values', () => {
    const arr = [1, 2, 3, 'string', true, false, null, undefined, [4, 5, [6, 7]]];
    const flattenedArr = flat(arr, 2);
    expect(flattenedArr).toEqual([1, 2, 3, 'string', true, false, null, undefined, 4, 5, 6, 7]);
  })
})