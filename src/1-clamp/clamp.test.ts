import { describe, expect, test } from 'vitest';
import { clamp } from "./clamp";
describe("clamp", () => {
  test("in the range", () => {
    expect(clamp(7, 0, 9)).toBe(7);
  })

  test("lower", () => {
    expect(clamp(-12, -4, 5)).toBe(-4);
  })

  test("upper", () => {
    expect(clamp(18, 3, 9)).toBe(9);
  })
})