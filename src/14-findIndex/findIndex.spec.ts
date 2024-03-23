import { describe, expect, test, vi } from 'vitest';
import { findIndex } from './findIndex';

const arr1 = [-5, 3, -9, 4, 7];
const arr2 = [-5, 0, 3, 3, 4];
const arr3 = [-5, -3, -9, 4, 7];
const equalTo3 = (num: number) => num === 3;

describe('findIndex', () => {
  test('find element only exist at index 1, should return 1', () => {
    expect(findIndex(arr1, equalTo3)).toBe(1)
  })

  test('find element exist at index 2 and index 3, should return 2', () => {
    expect(findIndex(arr2, equalTo3)).toBe(2)
  })

  test('element do not exist in array, should return -1', () => {
    expect(findIndex(arr3, equalTo3)).toBe(-1)
  })

  test('set fromIndex, should return 3', () => {
    expect(findIndex(arr2, equalTo3, 3)).toBe(3)
  })

  test('set invalid fromIndex, should throw error', () => {
    expect(() => findIndex(arr2, equalTo3, 30)).toThrowError('fromIndex is invalid')
  })
})