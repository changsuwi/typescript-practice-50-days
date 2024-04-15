import { describe, expect, test } from "vitest";
import { isEmpty } from "./isObjectEmpty";

describe('isObjectEmpty', () => {
  test('should return true if the object is empty', () => {
    const object = {};
    expect(isEmpty(object)).toBe(true);
  })

  test('should return false if the object is not empty', () => {
    const object = { a: 1, b: 2 };
    expect(isEmpty(object)).toBe(false);
  })

  test('should return true if the object is an empty array', () => {
    const array: any[] = [];
    expect(isEmpty(array)).toBe(true);
  })

  test('should return false if the object is not an empty array', () => {
    const array: any[] = [1, 2, 3];
    expect(isEmpty(array)).toBe(false);
  })
})