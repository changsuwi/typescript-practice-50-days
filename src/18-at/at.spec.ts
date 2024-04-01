import { describe, expect, test } from "vitest";
import "./at";

describe('at', () => {
  //positive index
  test('should return the value at the given index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(2)).toBe(3);
  })

  //out of range
  test('should return undefined if the index is out of range', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(5)).toBeUndefined();
  })

  //negative index
  test('should return the value at the given negative index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(-2)).toBe(4);
  })

  //negative index and out of range
  test('should return undefined if the index is negative and out of range', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(-6)).toBeUndefined();
  })

  //sparse array
  test('should return the value at the given index in a sparse array', () => {    
    const arr = [1, , 3, 4, 5];
    expect(arr.at(2)).toBe(3);
    expect(arr.at(-4)).toBeUndefined();
  })

  //float
  test('should return the value at the given float index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(2.5)).toBe(3);
    expect(arr.at(-0.5)).toBe(1);
    expect(arr.at(-1.1)).toBe(5);
  })

  //NaN
  test('should return undefined if the index is NaN', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(NaN)).toBeUndefined();
  })

  //infinity
  test('should return undefined if the index is Infinity', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(Infinity)).toBeUndefined();
  })

  //-infinity
  test('should return undefined if the index is -Infinity', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.at(-Infinity)).toBeUndefined();
  })
})

