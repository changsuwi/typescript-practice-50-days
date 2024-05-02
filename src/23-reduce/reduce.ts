interface Array<T> {
  myReduce<R>(callbackfn: (previousValue: R, currentValue: T, currentIndex: number, array: T[]) => R, initialValue: R): R;
}

Array.prototype.myReduce = function<T,R>(callbackfn: (previousValue: R, currentValue: T, currentIndex: number, array: T[]) => R, initialValue: R): R {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = callbackfn(result, this[i], i, this);
  }
  return result;
}