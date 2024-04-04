import { describe, expect, test } from "vitest";
import { isEqual } from "./isEqual";

describe('isEqual', () => {
  test('should return true if the two primitive type values are equal', () => {
    expect(isEqual(1, 1)).toBe(true)
  })

  test('should return false if the two primitive type values are not equal', () => {
    expect(isEqual(1, 2)).toBe(false)
  })

  test('should return true if the two objects are equal', () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true)
  })

  test('should return false if the two objects are not equal', () => {
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false)
  })

  test('should return true if the two arrays are equal', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  test('should return false if the two arrays are not equal', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false)
  })

  test('should return false if the one object and one primitive type ', () => {
    expect(isEqual({ a: 1 }, 1)).toBe(false)
  })

  test('should return false if the one array and one primitive type ', () => {
    expect(isEqual([1, 2, 3], 1)).toBe(false)
  })

  test('should return false if the one object and one array ', () => {
    expect(isEqual({ a: 1 }, [1, 2, 3])).toBe(false)
  })

  test('should return false if the one array and one object ', () => {
    expect(isEqual([1, 2, 3], { 0: 1, 1: 2, 2: 3 })).toBe(false)
  })
})

