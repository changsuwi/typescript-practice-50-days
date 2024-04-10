import { describe, expect, test } from "vitest";
import { join } from "./join";

describe('join', () => {
  test('should join two arrays with different ids', () => {
    const arr1 = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const arr2 = [{ id: 4, name: 'c' }, { id: 3, name: 'd' }];
    const result = join(arr1, arr2);
    expect(result).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'd' }, { id: 4, name: 'c' }]);
  })

  test('should use arr2 value when the same attribute', () => {
    const arr1 = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const arr2 = [{ id: 1, name: 'c' }, { id: 2, name: 'd' }];
    const result = join(arr1, arr2);
    expect(result).toEqual([{ id: 1, name: 'c' }, { id: 2, name: 'd' }]);
  })

  test('result should be sorted by id', () => {
    const arr1 = [{id: 100}, { id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const arr2 = [{ id: 2, name: 'c' }, { id: 1, name: 'd' }];
    const result = join(arr1, arr2);
    expect(result).toEqual([{ id: 1, name: 'd' }, { id: 2, name: 'c' }, { id: 100 }]);
  })

  test('should include all attributes', () => {
    const arr1 = [{id: 100, name: 'a'}, { id: 1, name: 'b' }, { id: 2, name: 'c' }];
    const arr2 = [{ id: 2, address: 'd' }, { id: 1, test: 'e' }];
    const result = join(arr1, arr2);
    expect(result).toEqual([{ id: 1, name: 'b', test: 'e' }, { id: 2, name: 'c', address: 'd' }, { id: 100, name: 'a' }]);
  })
})