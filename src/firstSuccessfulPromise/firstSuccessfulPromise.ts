// Like Promise.any
// Given a promise array, return the first successful promise.
// If all promises are rejected, return undefined.

export async function firstSuccessfulPromise(promiseArray: Promise<any>[]) {

  let isResolve = false;
  let rejectCount = 0;
  return new Promise((resolve) => {
    promiseArray.forEach((promise) => {
      promise
      .then(res => {
        if(!isResolve ) {
          isResolve = true;
          resolve(res)
          
        }
      })
      .catch(() => {
        rejectCount++;
        if(rejectCount === promiseArray.length) {
          resolve(undefined)
        }
      })
    });
    
  });
}