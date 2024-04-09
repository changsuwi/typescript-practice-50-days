import { describe, expect, test } from "vitest";
import "./groupBy";

describe('groupBy', () => {
  test('should group an array by a property', () => {
    const arr = [{ id: 1, name: 'a' }, { id: 1, name: 'b' }, { id: 3, name: 'c' }];
    const result = arr.groupBy(item => item.id);
    expect(result).toEqual({ 1: [{ id: 1, name: 'a' }, { id: 1, name: 'b' }], 3: [{ id: 3, name: 'c' }] });
  })

  test('should return an empty object if the array is empty', () => {
    const arr: any[] = [];
    const result = arr.groupBy(item => item.id);
    expect(result).toEqual({});
  })

  test('should return an empty object if the array is empty', () => { 
    const arr: any[] = [];
    const result = arr.groupBy(item => item.id);
    expect(result).toEqual({});
  })

  test('should return an array of numbers if given a number array', () => {
    const arr = [0, 1, 2, 1, 7, 0];
    const result = arr.groupBy(item => item);
    expect(result).toEqual({ 0: [0, 0], 1: [1, 1], 2: [2], 7: [7] });
  })
})