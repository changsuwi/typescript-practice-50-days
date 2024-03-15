import { describe, expect, test } from 'vitest';
import { difference } from './difference';

describe("difference", () => {
  test("[2, 3] are the same values, should return [1, 1]", () => {
    expect(difference([1, 1, 2, 3], [2, 3])).toStrictEqual([1,1])
  })

  test("two empty array, should return empty array", () => {
    expect(difference([], [])).toStrictEqual([])
  })

  test("arr is subset of value, should return empty array", () => {
    expect(difference([1, 2, 3], [1, 2, 3, 4])).toStrictEqual([])
  })
})