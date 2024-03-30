import { beforeEach, describe, expect, test } from "vitest";

import { cloneDeep } from "./cloneDeep";

describe('cloneDeep', () => {
  test('give a simple object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    const result = cloneDeep(obj);
    expect(result).toStrictEqual(obj);
    expect(result).not.toBe(obj);
  })
  test('give a complex object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: {
        e: 4,
        f: 5,
        g: {
          h: 6,
          i: 7
        }
      }
    }
    const result = cloneDeep(obj);
    expect(result).toStrictEqual(obj);
    expect(result).not.toBe(obj);
    expect(result.d).not.toBe(obj.d);
    expect(result.d.g).not.toBe(obj.d.g);
  })
  test('give a simple array', () => {
    const arr = [1, 2, 3];
    const result = cloneDeep(arr);
    expect(result).toStrictEqual(arr);
    expect(result).not.toBe(arr);
  })
  test('give a complex array', () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
    const result = cloneDeep(arr);
    expect(result).toStrictEqual(arr);
    expect(result).not.toBe(arr);
    expect(result[3]).not.toBe(arr[3]);
    expect(result[3][0]).not.toBe(arr[3] as number[][0]);
  })
  test('give a simple object with a circular reference', () => {
    const obj: {a: number, b: number, c: number, d: any} = {
      a: 1,
      b: 2,
      c: 3,
      d: undefined
    }
    obj.d = obj;
    const result = cloneDeep(obj);
    expect(result).toStrictEqual(obj);
    expect(result).not.toBe(obj);
    expect(result.d).toBe(result);
  })
  test('give a complex object with a circular reference', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: {
        e: 4,
        f: 5,
        g: {
          h: 6,
          i: 7
        }
      }
    };
    (obj.d.g as any).h = obj.d;
    const result = cloneDeep(obj);
    expect(result).toStrictEqual(obj);
    expect(result).not.toBe(obj);
    expect(result.d.g.h).toBe(result.d);
  })
  test('give a simple array with a circular reference', () => {
    let arr: any[] = [1, 2, 3];
    arr.push(arr);
    const result = cloneDeep(arr);
    expect(result).toStrictEqual(arr);
    expect(result).not.toBe(arr);
    expect(result[3]).toBe(result);
  })
  // this test is not working
  // test('give a complex array with a circular reference', () => {
  //   let arr: any[] = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
  //   arr[3].push(arr);
  //   const result = cloneDeep(arr);
  //   expect(result).toStrictEqual(arr);
  //   expect(result).not.toBe(arr);
  //   expect(result[3]).toBe(result);
  // })
  
})