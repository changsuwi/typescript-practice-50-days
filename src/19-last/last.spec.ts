import { describe, expect, test } from "vitest";
import "./last";

describe('last', () => {
  test('should return the last element of the array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.last()).toBe(5);
  })

  test('should return -1 if the array is empty', () => {
    const arr: any[] = [];
    expect(arr.last()).toBe(-1);
  })

  test('should return the last element of the sparse array', () => {
    const arr = [1, , 3, 4, 5];
    expect(arr.last()).toBe(5);
  })
})