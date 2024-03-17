import { describe, expect, test, vi } from 'vitest';
import { debounce } from './debounce';

describe("debounce", () => {
  test("function should be called once", () => {
    const test = {test: vi.fn()};
    const debounceFunc = debounce(test.test, 100);
    vi.useFakeTimers();
    
    const spy = vi.spyOn(test, "test");
    debounceFunc();
    debounceFunc();
    vi.advanceTimersByTime(100);
    
    expect(spy).toHaveBeenCalledTimes(1);
  })
})