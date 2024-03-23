import { beforeEach, describe, expect, test, vi } from 'vitest';

Array.prototype.square = function() {
  return this.map(e => e*e)
}

declare global {
  interface Array<T> {
    square(): Array<T> ;
  }
}

const arr = [1, 2, 3, 4]
describe('square', () => {
  test('should return square for every element in the array', () => {
    expect(arr.square()).toStrictEqual([1, 4, 9, 16])
  })

  test('should return []', () => {
    expect([].square()).toStrictEqual([])
  })
})