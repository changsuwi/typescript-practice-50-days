export function throttle(func: Function, wait: number) {
  let timerId: number | null;
  return function(this: any, ...args: any[]) {
    if(!timerId) {
      func.apply(this, args);
      timerId = setTimeout(() => {
        timerId = null
      }, wait);
    }
  }
}