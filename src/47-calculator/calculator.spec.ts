import { describe, expect, test} from "vitest";
import { Calculator } from "./calculator";

const defaultResult = 10;
describe('calculator', () => {
  test('should return calculator', () => {
    expect(new Calculator(defaultResult)).toBeInstanceOf(Calculator);
  })

  test('get result should return defaultResult', () => {
    expect(new Calculator(defaultResult).getResult()).toBe(defaultResult);
  })

  test('add two, should return defaultResult + 2', () => {
    expect(new Calculator(defaultResult).add(2).getResult()).toBe(defaultResult + 2);
  })

  test("subtract three, should return defaultResult - 3", () => {
    expect(new Calculator(defaultResult).subtract(3).getResult()).toBe(defaultResult - 3);
  })
  test("multiply two, should return defaultResult * 2", () => {
    expect(new Calculator(defaultResult).multiply(2).getResult()).toBe(defaultResult * 2);
  })
  test("divide two, should return defaultResult / 2", () => {
    expect(new Calculator(defaultResult).divide(2).getResult()).toBe(defaultResult / 2);
  })
  test("divide zero, should throw error", () => {
    expect(() => new Calculator(defaultResult).divide(0)).toThrowError("Division by zero");
  })
  test("power three, should return defaultResult ** 3", () => {
    expect(new Calculator(defaultResult).power(3).getResult()).toBe(defaultResult ** 3);
  })
  test("when initial value = 10, add two, subtract three, multiply two, divide two, power three, should return defaultResult", () => {
    expect(new Calculator(10)
      .add(2)
      .subtract(3)
      .multiply(2)
      .divide(2)
      .power(3)
      .getResult()).toBe(729);
  })
})