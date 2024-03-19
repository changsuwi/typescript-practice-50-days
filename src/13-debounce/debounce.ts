export function debounce(func: Function, wait: number): Function {
  let timerId: number;

  return function(this: any, ...args: any[]) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), wait)
  }
}