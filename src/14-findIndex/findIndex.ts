export function findIndex(arr: any[], predicate: (element: any) => boolean, fromIndex: number = 0) {
  const len = arr.length;
  if(fromIndex >= len) {
    throw 'fromIndex is invalid'
  }

  for(let i=fromIndex; i<len; i++) {
    if(predicate(arr[i])) {
      return i
    }
  }
  return -1;
}