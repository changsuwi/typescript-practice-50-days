import { describe, expect, test } from "vitest";
import { getAverage } from "./getAverage";

describe('getAverage', () => {
  test('should return the average of the numbers', () => {
    expect(getAverage([1, 2, 3, 4, 5])).toBe(3)
  })

  test('should return 0 if the array is empty', () => {
    expect(getAverage([])).toBe(0)
  })

  test('should return NaN if the array contains NaN', () => {
    expect(getAverage([1, 2, 3, NaN])).toBeNaN()
  })

  test('should return Infinity if the array contains Infinity', () => {
    expect(getAverage([1, 2, 3, Infinity])).toBe(Infinity)
  })

  test('should return -Infinity if the array contains -Infinity', () => {
    expect(getAverage([1, 2, 3, -Infinity])).toBe(-Infinity)
  })
})