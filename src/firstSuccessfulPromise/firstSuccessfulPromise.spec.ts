import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { firstSuccessfulPromise } from "./firstSuccessfulPromise";

describe("firstSuccessfulPromise", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })
  
  afterEach(() => {
    vi.clearAllTimers();
  })
  
  test('should return the first successful promise ', async () => {
    const p1 = Promise.reject(new Error("error"));
    const p2 = Promise.resolve(1);
    const result = await firstSuccessfulPromise([p1, p2]);

    expect(result).toBe(1);
  });
  
  test("given setTimeout promise, should return the first successful promise", async () => {
    const p1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
    const p2 = Promise.reject(new Error("error"));
    const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 500));

    const result = firstSuccessfulPromise([p1, p2, p3]);
    vi.advanceTimersByTime(1500);
    expect(await result).toBe(3);
  });

  test("should return undefined if all promises are rejected", async () => {
    const p1 = Promise.reject(new Error("error"));
    const p2 = Promise.reject(new Error("error"));
    const p3 = Promise.reject(new Error("error"));

    const result = await firstSuccessfulPromise([p1, p2, p3]);

    expect(result).toBeUndefined();
  });

  
});
