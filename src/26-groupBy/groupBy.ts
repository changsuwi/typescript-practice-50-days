interface Array<T> {
  groupBy(fn: (item: T) => any): Record<string, T[]>;
}

Array.prototype.groupBy = function<T>(fn: (item: T) => any) {
  const result: Record<string, T[]> = {};
  for (const item of this) {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}