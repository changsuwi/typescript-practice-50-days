import { describe, expect, test, beforeEach, vi } from "vitest";
import { promiseAll } from "./myPromiseAll";

describe('myPromiseAll', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })
  test('should return a promise', () => {
    const functions = [() => new Promise(resolve => setTimeout(() => resolve(5), 200))]
    const result = promiseAll(functions);
    expect(result).toBeInstanceOf(Promise);
  })

  test('should resolve with the result of all functions', async () => {
    const functions = [() => new Promise(resolve => setTimeout(() => resolve(5), 200)), () => new Promise(resolve => setTimeout(() => resolve(10), 200))]
    const result = promiseAll(functions);
    vi.runAllTimers();
    expect(await result).toEqual([5, 10]);
  })

  test('should reject with the error of the first function that rejects', async () => {
    const functions = [() => new Promise((resolve, reject) => setTimeout(() => reject("5"), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("10"), 100))]
    const resultPromise = promiseAll(functions);
    vi.runAllTimers();
    await expect(resultPromise).rejects.toThrow("10");
  })

  test('should reject with the error if only one function rejects', async () => {
    const functions = [() => new Promise((resolve) => setTimeout(() => resolve(5), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("10"), 1000))]
    const resultPromise = promiseAll(functions);
    vi.runAllTimers();
    await expect(resultPromise).rejects.toThrow("10");
  })
})