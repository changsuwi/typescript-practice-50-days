export function promiseAll(functions: Function[]) {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    functions.forEach((fn) => {
      fn().then((result: any) => {
        results.push(result);
        if(results.length === functions.length) {
          resolve(results);
        }
      }).catch((err: any) => {
        reject(err);
      })
    })
  })
}