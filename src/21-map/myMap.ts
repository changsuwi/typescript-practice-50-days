interface Array<T> {
  myMap<U>(fn: (item: T, index: number) => U): U[];
}

Array.prototype.myMap = function<T, U>(fn: (item: T, index: number) => U) {
  const result: U[] = [];
  for(let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i));
  }
  return result;
}