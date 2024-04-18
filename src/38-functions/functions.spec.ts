import { describe, expect, test} from "vitest";
import { functions } from "./functions";

const add = (x: number) => x + 1;
const mul = (x: number) => x * 2;

describe('functions', () => {
  test('should compose functions with an argument', () => {
    
    const addMul = functions(add, mul);
    expect(addMul(1)).toBe(3);
  })

  test('should return the argument if no functions are provided', () => {
    const emptyFn = functions();
    expect(emptyFn(10)).toBe(10);
  })
})