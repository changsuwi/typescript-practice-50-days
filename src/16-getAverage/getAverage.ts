export function getAverage(arr: number[]) {
  if(arr.length === 0) {
    return 0;
  }
  
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}