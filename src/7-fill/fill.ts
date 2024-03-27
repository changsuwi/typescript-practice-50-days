export function fill(array: any[], value: any, start: number = 0, end: number = array.length) {
  if(start < 0) {
    start += array.length;
  }
  if(end < 0) {
    end += array.length;
  }
  if(end > array.length) {
    end = array.length;
  }
  for(let i = start; i < end ; i++) {
    array[i] = value
  }
}