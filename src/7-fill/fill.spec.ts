import { beforeEach, describe, expect, test } from "vitest";
import { fill } from "./fill";

describe('fill', () => {
  let arr: any[];
  beforeEach(() => {
    arr = [1, 2, 3, 4, 5];
  })
  test('give positive start and positive end', () => {
    fill(arr, '*', 1 ,3);
    expect(arr).toStrictEqual([1, "*", "*", 4, 5])
  })
  test('give end = 3 without start', () => {
    fill(...[arr, "*", , 3]);
    expect(arr).toStrictEqual(["*", "*", "*", 4, 5])
  })
  test('give start = 1 without end', () => {
    fill(arr, "*", 1);
    expect(arr).toStrictEqual([1, "*", "*", "*", "*"])
  })
  test('give negative start', () => {
    fill(arr, "*", -4);
    expect(arr).toStrictEqual([1, "*", "*", "*", "*"])
  })
  test('give negative end', () => {
    fill(arr, "*", 1, -1);
    expect(arr).toStrictEqual([1, "*", "*", "*", 5])
  })
  test('give start equal to end', () => {
    fill(arr, "*", 1, 1);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5])
  })
  test("give start > end and they are all positive", () => {
    fill(arr, "*", 2, 1);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5])
  })
  test("give start >= array.length", () => {
    fill(arr, "*", 7, 5);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5])
  })
  test("give end > array.length", () => {
    fill(arr, "*", 1, 6);
    expect(arr).toStrictEqual([1, "*", "*", "*", "*"])
  })
  
})