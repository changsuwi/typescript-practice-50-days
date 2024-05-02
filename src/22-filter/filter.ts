interface Array<T> {
  myFilter(callback: (item: T, index: number, array: T[]) => boolean, thisArg?: any): T[];
}

Array.prototype.myFilter = function<T>(callback: (item: T, index: number, array: T[]) => boolean, thisArg?: any): T[] {
  
  const result: T[] = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (callback.call(thisArg, item, i, this)) {
      result.push(item);
    }
  }
  return result;
}