import { describe, expect, test } from "vitest";
import { removeDuplicate } from "./removeDuplicate";

describe('removeDuplicate', () => {
  test('should return an array without duplicates', () => {
    expect(removeDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test('should return an empty array', () => {
    expect(removeDuplicate([])).toStrictEqual([])
  })

  test('should return an array with one element', () => {
    expect(removeDuplicate([1, 1, 1, 1, 1])).toStrictEqual([1])
  })

})

