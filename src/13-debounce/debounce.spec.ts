import { beforeEach, describe, expect, test, vi } from 'vitest';
import { debounce } from './debounce';

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  })
  test("function should be execute once", () => {
    let value = 0;
    const inc = function() {
      value++;
    }
    const debounceInc = debounce(inc, 100);
    debounceInc();
    debounceInc();
    expect(value).toBe(0);
    vi.runAllTimers();
    expect(value).toBe(1);
  })

  test("args can work, value should be one", () => {
    let value = 0;
    const addOrSubtract = (isAdd: boolean) => isAdd ? value++ : value--;

    const debounceAddOrSubtract = debounce(addOrSubtract, 100);
    debounceAddOrSubtract(true);
    debounceAddOrSubtract(true);

    expect(value).toBe(0);
    
    vi.runAllTimers()
    expect(value).toBe(1);
  })

  test('callbacks can access `this`', () => {
    const increment = debounce(function (this: any, delta: number) {
      this.val += delta;
    }, 10);

    const obj = {
      val: 2,
      increment,
    };

    expect(obj.val).toBe(2);
    obj.increment(3);
    expect(obj.val).toBe(2);

    vi.runAllTimers()
    expect(obj.val).toBe(5);

  });
})