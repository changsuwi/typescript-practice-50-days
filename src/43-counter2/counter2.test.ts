import { beforeEach, describe, expect, test } from 'vitest';
import { Counter, createCounter } from './counter2';
describe("counter2", () => {
  let counter: Counter;
  describe("without initial value", () => {
    beforeEach(() => {
      counter = createCounter();
    })

    test("value should be 0 ", () => {
      expect(counter.get()).toEqual(0);
    })
  
    test("increment, value should be 1", () => {
      expect(counter.increment()).toEqual(1);
    })
  
    test("decrement, value should be -1", () => {
      expect(counter.decrement()).toEqual(-1);
    })
  
    test("increment twice and then decrement. value should be 1", () => {
      expect(counter.increment()).toBe(1);
      expect(counter.increment()).toBe(2);
      expect(counter.decrement()).toBe(1);
    })

    test('increment twice and then reset, value should be 0', () => {
      expect(counter.increment()).toBe(1);
      expect(counter.increment()).toBe(2);
      expect(counter.reset()).toBe(0);
    })
  })

  describe("with initial value -2", () => {
    beforeEach(() => {
      counter = createCounter(-2);
    })
    test('vale should be -2', () => {
      expect(counter.get()).toEqual(-2);
    })

    test("decrement twice and then reset, value should be -2", () => {
      expect(counter.decrement()).toBe(-3);
      expect(counter.decrement()).toBe(-4);
      expect(counter.reset()).toBe(-2);
    })
  })
}) 