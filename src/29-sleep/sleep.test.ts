import { describe, expect, test } from 'vitest';
import { sleep } from './sleep';

describe('sleep', () => {
  test('it should await with sleep function using await', async() => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    expect((end - start)).toBeGreaterThanOrEqual(1000)
  })

  test('it should await with sleep function using then', async() => {
    const start = Date.now();
    sleep(1000).then(() => {
      const end = Date.now();
      expect((end - start)).toBeGreaterThanOrEqual(1000)
    });
    
  })
})