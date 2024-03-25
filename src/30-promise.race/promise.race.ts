export function promiseRace(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    if(promises.length === 0) {
      return;
    }
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve, reject)
    })
  })
}