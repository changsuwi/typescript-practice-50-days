export function timeLimit(fn: (...args: Array<any>) => Promise<any>, limit: number):  (...args: Array<any>) => Promise<any>{
  return function(...args: Array<any>) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Time Limit Exceeded')), limit))
    ])
  }
}