export function repeat(func: Function, times: number, wait: number) {
  function wrapper (...args: any[]) {
    if (times > 0) {
      func(...args);
      times--;
      setTimeout(wrapper, wait, ...args);
    }
  };
  return wrapper;
}