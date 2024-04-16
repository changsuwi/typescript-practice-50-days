export function cancelAble(func: Function, args: any[], timeout: number) {
  const timerId = setTimeout(() => {
    func(...args);
  }, timeout);
  return function() {
    clearTimeout(timerId);
  }
}