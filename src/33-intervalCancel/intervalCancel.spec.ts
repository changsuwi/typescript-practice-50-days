import { describe, expect, test, beforeEach , afterEach, vi} from "vitest";
import { cancelAble } from "./cancelAble";

let num = 0;
const add = (x: number) => num += x ;

describe('intervalCancel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    num = 0;
  })
  afterEach(() => {
    vi.clearAllTimers();
  })
  test('should cancel interval at cancel time milliseconds',  () => {
    const cancelFn = cancelAble(add, [10], 100);
    setTimeout(() => {
      cancelFn();
    }, 150);
    vi.advanceTimersByTime(0);
    expect(num).toBe(10);
    vi.advanceTimersByTime(100);
    expect(num).toBe(20);
    vi.advanceTimersByTime(200);
    expect(num).toBe(20);
  })
  
  


})