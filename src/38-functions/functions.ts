export function functions(...fns: Function[]) {
  return function(arg: any) {
    return fns.reverse().reduce((acc, fn) => fn(acc), arg);
  }
}