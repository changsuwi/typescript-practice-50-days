import { beforeEach, describe, expect, test } from "vitest";
import { fromParis } from "./fromParis";

describe('fromParis', () => {
  test('give a array containing three pairs of strings', () => {
    const result = fromParis([['a', 'b'], ['c', 'd'], ['e', 'f']]);
    expect(result).toStrictEqual({
      a: 'b',
      c: 'd',
      e: 'f'
    });
  })

  test('give a array [[3, a], [b, 2], [1, c]]', () => {
    const result = fromParis([[3, 'a'], ['b', 2], [1, 'c']]);
    expect(result).toStrictEqual({
      3: 'a',
      b: 2,
      1: 'c'
    });
  })

  test('give an array containing an empty array', () => {
    const result = fromParis([[]]);
    expect(result).toStrictEqual({undefined: undefined});
  })

  test('give an empty array', () => {
    const result = fromParis([]);
    expect(result).toStrictEqual({});
  })

  test('give an array containing some paris only containing one element', () => {
    const result = fromParis([['a'], ['b', 'c']]);
    expect(result).toStrictEqual({
      a: undefined,
      b: 'c'
    });
  })
});