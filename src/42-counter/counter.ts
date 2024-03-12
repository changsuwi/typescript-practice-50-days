export function createCounter(initialValue = 0) {
  let count = initialValue;
  return () => {
    return count++
  }
}