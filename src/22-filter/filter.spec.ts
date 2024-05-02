import {expect, describe, test} from 'vitest';
import './filter';
const fn = (item: any) => item > 1;
const fnWithIndex = (item: any, index: number) => item > index;
const fnWithIndexAndArray = (item: any, index: number, array: any[]) => (item > index) && (array.length / 2 < index);
const fnWithThisArg = function(this: any, item: any) {
  return item * this % 2 === 0;
}
describe('filter', () => {
  test('should filter out the first element', () => {
    const input = [1, 2, 3, 4, 5];
    const output = input.myFilter(fn);
    expect(output).toEqual([2, 3, 4, 5]);
  });

  test('when callback function use index parameter, should filter out the first element', () => {
    const input = [0, 2, 3, 4, 5];
    const output = input.myFilter(fnWithIndex);
    expect(output).toEqual([2, 3, 4, 5]);
  });

  test('when callback function use index and array parameter, should filter out first three elements', () => {
    const input = [0, 2, 3, 4, 5];
    const output = input.myFilter(fnWithIndexAndArray);
    expect(output).toEqual([4, 5]);
  });

  test('when given thisArg, should filter out the odd numbers', () => {
    const input = [0, 2, 3, 4, 5];
    const output = input.myFilter(fnWithThisArg, 7);
    expect(output).toEqual([0, 2, 4]);
  });
});