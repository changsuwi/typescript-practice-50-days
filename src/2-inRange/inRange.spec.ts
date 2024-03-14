import { describe, expect, test } from 'vitest';
import { inRange } from './inRange';
describe('inRange', () => { 
  test("only two params", () => {
    expect(inRange(4, 8)).toBe(true);
  })

  test("three params", () => {
    expect(inRange(3, 2, 4)).toBe(true);
  })

  test("when start > end", () => {
    expect(inRange(3, 4, 2)).toBe(true);
  })
})