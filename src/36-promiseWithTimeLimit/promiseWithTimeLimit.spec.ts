import { describe, expect, test, beforeEach, vi } from "vitest";
import { timeLimit } from "./promiseWithTimeLimit";

const fn = () => new Promise(resolve => setTimeout(() => resolve(5), 200));
const fnWithArgs = (val: number) => new Promise(resolve => setTimeout(() => resolve(val), 200));

describe('promiseWithTimeLimit', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })
  test('should return a async function', () => {
    const timeLimitedFn = timeLimit(fn, 1000);
    expect(typeof timeLimitedFn).toBe('function');
  })

  test('should resolve with the result of the function', async () => {
    const timeLimitedFn = timeLimit(fn, 1000);
    const promise = timeLimitedFn();
    vi.runAllTimers();
    expect(await promise).toEqual(5);
  })

  test('should reject with the error of the function if it exceeds the time limit', async () => {
    const timeLimitedFn = timeLimit(fn, 100);
    const promise = timeLimitedFn();
    vi.runAllTimers();
    await expect(promise).rejects.toThrow('Time Limit Exceeded');
  })

  test('can pass arguments to the function', async () => {
    const timeLimitedFn = timeLimit(fnWithArgs, 1000);
    const promise = timeLimitedFn(5);
    vi.runAllTimers();
    expect(await promise).toEqual(5);
  })
})