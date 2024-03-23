export interface Counter {
  get: () => number,
  increment: () => number,
  decrement: () => number,
  reset: () => number
}

export function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    get: function() {
      return count;
    },
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    },
    reset: function() {
      return count = initialValue
    }
  }
}