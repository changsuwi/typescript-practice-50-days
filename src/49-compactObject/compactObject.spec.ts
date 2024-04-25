import { describe, expect, test } from "vitest";
import { compactObject } from "./compactObject";

describe('compactObject', () => {
  test('should return an object with only truly values', () => {
    const obj = {
      a: 1,
      b: 0,
      c: false,
      d: null,
      e: undefined,
      f: '',
    }
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual({
      a: 1,
    })
  })

  test('should return the same object if it is not an object', () => {
    const obj = 'string';
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual(obj);
  })

  test('should return the same object if it is an object without falsy values', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
    }
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual(obj);
  })

  test('when given nested objects, should remove all falsy keys in the nested objects', () => {
    const obj = {
      a: 1,
      b: 0,
      c: false,
      d: null,
      e: undefined,
      f: '',
      g: {
        a: 1,
        b: 0,
        c: false,
        d: null,
        e: undefined,
        f: '',
      },
    }
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual({
      a: 1,
      g: {
        a: 1,
      },
    })
  })

  test('given an array, should remove falsy values', () => {
    const obj = [1, 0, false, null, undefined, ''];
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual([1]);
  })

  test('given an nested array, should remove falsy values', () => {
    const obj = [1, 0, false, null, undefined, '', [1, 0, false, null, undefined, '']];
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual([1, [1]]);
  })

  test('given an array of objects, should remove falsy values', () => {
    const obj = [1, 0, false, null, undefined, '', { a: 1, b: 0, c: false, d: null, e: undefined, f: '' }];
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual([1, { a: 1 }]);
  })

  test('given an array of nested objects, should remove falsy values', () => {
    const obj = [1, 0, false, null, undefined, '', { a: 1, b: 0, c: false, d: null, e: undefined, f: '', g: [1, 0, false, null, undefined, ''] }];
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual([1, { a: 1, g: [1] }]);
  }) 

  test('given a nested object with nested arrays, should remove falsy values', () => {
    const obj = {
      a: 1,
      b: 0,
      c: false,
      d: null,
      e: undefined,
      f: '',
      g: [1, 0, false, null, undefined, ''],
    }
    const compactedObj = compactObject(obj);
    expect(compactedObj).toEqual({
      a: 1,
      g: [1],
    })
  })
  
});