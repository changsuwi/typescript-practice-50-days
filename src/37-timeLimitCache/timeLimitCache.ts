interface TimeLimitCacheValue {
  value: any;
  timerId: number;
}
export default class TimeLimitCache {
  private cache: Map<any, TimeLimitCacheValue>;
  constructor() {
    this.cache = new Map<any, TimeLimitCacheValue>();
  }

  set(key: any, value: any, timeLimit: number): boolean {
    const currValue = this.cache.get(key);
    if(currValue) {
      clearTimeout(currValue.timerId);
    }
    const timerId = setTimeout(() => {
      this.cache.delete(key);
    }, timeLimit);
    this.cache.set(key, {value, timerId});
    return currValue !== undefined;
  }

  get(key: any): any {
    const value = this.cache.get(key);
    if(value) {
      return value.value;
    }
    return -1;
  }

  count(): number {
    return this.cache.size;
  }
}