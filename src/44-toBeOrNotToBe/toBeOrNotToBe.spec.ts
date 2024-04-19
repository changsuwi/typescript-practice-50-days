import { describe, expect, test} from "vitest";
import { myExpect } from "./myExpect";

describe('toBeOrNotToBe', () => {
  test('should return true if the expected value is equal to the actual value', () => {
    expect(myExpect(1).toBe(1)).toBe(true);
  })
  test('should throw error if the expected value is not equal to the actual value', () => {
    expect(() => myExpect(1).toBe(2)).toThrowError("Not Equal");
  })
  test('should return true if the expected value is not equal to the actual value', () => {
    expect(myExpect(1).notToBe(2)).toBe(true);
  })
  test('should throw error if the expected value is equal to the actual value', () => {
    expect(() => myExpect(1).notToBe(1)).toThrowError("Equal");
  })
})