import {expect, describe, test, beforeEach, vi} from 'vitest';
import { repeat } from './repeat';

let count = 0;
const simpleFunc = () => count++;
const funcIncludingArgs = (num: number) => count += num;

describe('34-repeat', () => {
  beforeEach(() => {
    count = 0;
    vi.useFakeTimers();
  });

  test('return should be a function', () => {
    expect(typeof (repeat(simpleFunc, 1, 0))).toBe('function');
  });
  
  test('count should be 4', () => {
    repeat(simpleFunc, 4, 0)();
    vi.runAllTimers();
    expect(count).toBe(4);
  });

  test('wait should work', () => {
    repeat(simpleFunc, 3, 100)();
    vi.advanceTimersByTime(1);
    expect(count).toBe(1);
    vi.advanceTimersByTime(100);
    expect(count).toBe(2);
    vi.advanceTimersByTime(100);
    expect(count).toBe(3);
  })

  test('func can be called with args', () => {
    const repeatFunc =repeat(funcIncludingArgs, 3, 10);
    repeatFunc(10);
    vi.advanceTimersByTime(1);
    expect(count).toBe(10);
    vi.advanceTimersByTime(10);
    expect(count).toBe(20);
    vi.advanceTimersByTime(20);
    expect(count).toBe(30);
  })
});