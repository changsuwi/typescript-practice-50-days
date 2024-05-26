import timeLimitCache from './timeLimitCache';
import {describe, it, expect, beforeEach, vi, beforeAll} from 'vitest';

describe('timeLimitCache', () => {
  let cache: timeLimitCache;
  beforeEach(() => {
    cache = new timeLimitCache();
    vi.useFakeTimers();
  });

  it('set key value, should return false', () => {
    expect(cache.set('test', 1, 100)).toBe(false);
  });

  it('cache hit, should return value', () => {
    cache.set('test', 10, 100);
    expect(cache.get('test')).toBe(10);
  });

  it('cache miss, should return -1', () => {
    expect(cache.get('test')).toBe(-1);
  });

  it('cache expired, should return -1', () => {
    cache.set('test', 10, 100);
    setTimeout(() => expect(cache.get('test')).toBe(-1), 2000);
    vi.runAllTimers();
  });

  it('count before expired, should return 1', () => {
    cache.set('test', 10, 100);
    expect(cache.count()).toBe(1);
  });

  it('count after expired, should return 0', () => {
    cache.set('test', 10, 100);
    setTimeout(() => expect(cache.count()).toBe(0), 2000);
    vi.runAllTimers();
  });

  it('a case include multiple set, get, and count', async() => {
    
    cache.set('test1', 10, 100);
    cache.set('test2', 20, 4000);
    cache.set('test3', 30, 200);
    expect(cache.count()).toBe(3);
    expect(cache.get('test1')).toBe(10);
    expect(cache.get('test2')).toBe(20);
    expect(cache.get('test3')).toBe(30);

    await new Promise(resolve => {
      setTimeout(resolve, 100)
      vi.advanceTimersByTime(100);
    });
    
    expect(cache.get('test1')).toBe(-1);
    expect(cache.count()).toBe(2);

    await new Promise(resolve => {
      setTimeout(resolve, 100)
      vi.advanceTimersByTime(100);
    });

    expect(cache.get('test1')).toBe(-1);
    expect(cache.get('test3')).toBe(-1);
    expect(cache.count()).toBe(1);
  });
});