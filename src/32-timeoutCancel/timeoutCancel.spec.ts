import { describe, expect, test, beforeEach , vi} from "vitest";
import { cancelAble } from "./cancelAble";

let num = 0;
const simpleAdd = () => num += 1;
const addWithArg = (arg: number) => num += arg;

describe('timeoutCancel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    num = 0;
  })
  test('should cancel a function if cancel function is called before timeout ',  () => {
    const cancel = cancelAble(simpleAdd, [], 100);
    vi.advanceTimersByTime(50);
    cancel();
    vi.advanceTimersByTime(100);
    expect(num).toBe(0);
  })

  test('should not cancel a function if cancel function is called after timeout ',  () => {
    const cancel = cancelAble(simpleAdd, [], 100);
    vi.advanceTimersByTime(150);
    cancel();
    expect(num).toBe(1);
  })

  test('should not cancel a function if cancel function is not called ',  () => {
    cancelAble(simpleAdd, [], 100);
    vi.advanceTimersByTime(150);
    expect(num).toBe(1);
  })

  test('should pass the arguments to the function',  () => {
    const cancel = cancelAble(addWithArg, [10], 100);
    vi.advanceTimersByTime(150);
    cancel();
    expect(num).toBe(10);
  })
})