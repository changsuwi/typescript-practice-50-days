import {expect, describe, test} from 'vitest';
import './reduce';

describe('reduce', () => {
  test('should sum the numbers', () => {
    const input = [1, 2, 3, 4, 5];
    const output = input.myReduce((a, b) => a + b, 0);
    expect(output).toEqual(15);
  });

  test('given callback with index parameter', () => {
    const input = [1, 2, 3, 4, 5];
    const output = input.myReduce((a, b, i) => a + b + i, 0);
    expect(output).toEqual(25);
  });

  test('given callback with array parameter', () => {
    const input = [1, 2, 3, 4, 5];
    const output = input.myReduce((a, b, index, arr) => a + b + index + arr.length, 0);
    expect(output).toEqual(50);
  });
});