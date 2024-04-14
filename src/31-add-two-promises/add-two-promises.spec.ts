import { describe, expect, test } from "vitest";
import { addTwoPromises } from './add-two-promises';

describe('addTwoPromises', () => {
  test('should return a promise', () => {
    const result = addTwoPromises(Promise.resolve(1), Promise.resolve(2));
    expect(result).toBeInstanceOf(Promise);
  })

  test('should resolve to the sum of the two promises', async () => {
    const result = await addTwoPromises(Promise.resolve(1), Promise.resolve(2));
    expect(result).toBe(3);
  })

  test('should resolve to the sum of the two promises with a delay', async () => {
    const result = await addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 10)), new Promise(resolve => setTimeout(() => resolve(5), 50)));
    expect(result).toBe(7);
  })

  test('should reject if one of the promises rejects', async () => {
    const result = addTwoPromises(Promise.resolve(1), Promise.reject(new Error('test')));
    expect(result).toBeInstanceOf(Promise);
    await expect(result).rejects.toThrow('test');
  })

  test('should reject if both promises reject', async () => {
    const result = addTwoPromises(Promise.reject(new Error('test')), Promise.reject(new Error('test')));
    expect(result).toBeInstanceOf(Promise);
    await expect(result).rejects.toThrow('test');
  })
})