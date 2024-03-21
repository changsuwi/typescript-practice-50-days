import { beforeEach, describe, expect, test, vi } from 'vitest';
import { throttle } from './throttle';

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })
  test('function should be execute once, so the value should be 1', () => {
    let value = 0;
    const inc = () => value++;
    const throttleInc = throttle(inc, 100);
    throttleInc();
    throttleInc();
    vi.advanceTimersByTime(100);
    expect(value).toBe(1);
  })

  test('args can be passed into throttle function, so the value should be 1', () => {
    let value = 0;
    const change = (isAdd: boolean) => isAdd === true ? value++ : value --;
    const throttleChange = throttle(change, 100);
    throttleChange(true);
    throttleChange(true);
    vi.advanceTimersByTime(100);
    expect(value).toBe(1);
  })

  test('this can be passed into throttle function, so the value should be 1', () => {
    const inc = throttle(function(this: any, value: number) {
      this.value += value;
    }, 100) 
    const obj = {
      value: 0,
      inc
    }
    
    obj.inc(10)
    obj.inc(10)
    vi.advanceTimersByTime(100);
    expect(obj.value).toBe(10);
  })
})