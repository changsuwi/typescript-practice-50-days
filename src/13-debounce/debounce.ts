export function debounce(fn: (...args: any[]) => any , duration: number) {
  let timerId: number;
  return function(...args: any[]) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), duration)
  }
}