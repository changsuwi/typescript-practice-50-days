export function chunk(arr: any[], size: number): any[][] {
  const result: any[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}