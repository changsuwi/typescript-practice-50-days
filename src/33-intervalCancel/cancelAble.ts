export function cancelAble(fn: Function, args: any[], interval: number) {
  fn(...args);
  const id = setInterval(() => {
    fn(...args);
  }, interval);

  return function() {
    clearInterval(id);
  }
}