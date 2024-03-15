export function difference(array: any[], value: any[]) {
  const set = new Set(value);
  array = array.filter(item => !set.has(item));
  return array;
}