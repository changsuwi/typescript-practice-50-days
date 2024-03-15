import { describe, expect, test } from 'vitest';
import { compact } from './compact';

describe("compact", () => {
  test("remove false", () => {
    expect(compact([1, false, 2, 3])).toStrictEqual([1,2,3])
  })

  test("remove empty string", () => {
    expect(compact([1, false, 2, "", 3])).toStrictEqual([1,2,3])
  })

  test("remove null", () => {
    expect(compact([1, false, 2, "", null, 3])).toStrictEqual([1,2,3])
  })

  test("remove 0", () => {
    expect(compact([0, 1, false, 2, "", null, 3])).toStrictEqual([1,2,3])
  })

  test("remove undefined", () => {
    expect(compact([0, 1, false, 2, "", null, undefined, 3])).toStrictEqual([1,2,3])
  })

  test("remove NaN", () => {
    expect(compact([0, 1, false, 2, "", null, undefined, NaN, 3])).toStrictEqual([1,2,3])
  })

  test("all invalid items, return should be empty array", () => {
    expect(compact([false, 0, null, "", undefined, NaN])).toStrictEqual([])
  })
})