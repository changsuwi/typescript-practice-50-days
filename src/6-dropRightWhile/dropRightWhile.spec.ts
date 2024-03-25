import { describe, expect, test } from "vitest";
import { dropRightWhile } from "./dropRightWhile";

describe('dropRightWhile', () => {
  test('should return [1, 2, 3]', () => {
    expect(dropRightWhile([1,2,3,4,5,6], (value: number) => value >= 4)).toStrictEqual([1,2,3])
  })
  test('should drop all element, should return []', () => {
    expect(dropRightWhile([1,2,3,4,5,6], (value: number) => value >= 0)).toStrictEqual([])
  })
  test('give empty array, should return empty array', () => {
    expect(dropRightWhile([], (value: number) => value >= 0)).toStrictEqual([])
  })
  test('A element does not fulfill predicate function in the middle index, should return [6, 5, 4, 1]', () => {
    expect(dropRightWhile([6,5,4,1,7,8], (value: number) => value>=4)).toStrictEqual([6,5,4,1])
  })
  test('give string array, should return [a, b, c, def]', () => {
    expect(dropRightWhile(['a', 'b', 'c', 'def', 'e', 'f'], (value: string) => value.length <= 1)).toStrictEqual(['a', 'b', 'c', 'def'])
  })
})