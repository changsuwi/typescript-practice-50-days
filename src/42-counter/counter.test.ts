import { describe, expect, test } from 'vitest';
import { createCounter } from './counter';
describe("counter", () => {
  test("count without initial value", () => {
    const counter = createCounter();
    expect(counter()).toEqual(0);
    expect(counter()).toEqual(1);
    expect(counter()).toEqual(2);
  })

  test("count with initial value", () => {
    const counter = createCounter(-2);
    expect(counter()).toEqual(-2);
    expect(counter()).toEqual(-1);
    expect(counter()).toEqual(0);
  })
}) 