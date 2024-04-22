import { describe, expect, test } from "vitest";
import "./myMap";
describe('myMap', () => {
  test('should map an array', () => {
    const arr = [1, 2, 3];
    const result = arr.myMap(item => item * 2);
    expect(result).toEqual([2, 4, 6]);
  })

  test('function with index should be work', () => {
    const arr = [1, 2, 3];
    const result = arr.myMap((item, index) => item * index);
    expect(result).toEqual([0, 2, 6]);
  })
})