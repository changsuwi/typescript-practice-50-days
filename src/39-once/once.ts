export function once(fn: Function) {
  let called = false;
  return function (this: any, ...args: any[]) {
    if(called) {
      return undefined;
    }
    
    called = true;
    return fn.apply(this, args);
  };
}