export function flat(arr: any[], depth: number): any[] {
  const flattenedArr: any[] = [];
  arr.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      flattenedArr.push(...flat(item, depth - 1));
    } else {
      flattenedArr.push(item);
    }
  });
  return flattenedArr;
}