import { describe, expect, test, beforeEach} from "vitest";
import { once } from "./once";

let value = 0;
const simpleFn = () => value++;
const fnWithArgs = (val: number) => value += val;
describe('once', () => {
  beforeEach(() => {
    value = 0;
  })

  test('should return function', () => {
    expect(typeof once(simpleFn)).toBe('function');
  })

  test('should call fn only once time', () => {
    const fnOnce = once(simpleFn);
    fnOnce();
    fnOnce();
    expect(value).toBe(1);
  })

  test('should return undefined when called twice', () => {
    const fnOnce = once(simpleFn);
    fnOnce();
    expect(fnOnce()).toBeUndefined();
  })

  test('should call fn with args only once time', () => {
    const fnOnce = once(fnWithArgs);
    fnOnce(2);
    fnOnce(2);
    expect(value).toBe(2);
  })

})