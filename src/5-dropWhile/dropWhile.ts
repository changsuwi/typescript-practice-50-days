export function dropWhile(array: any[], predicate: (value: any) => boolean) {
  let index = 0;
  while(predicate(array[index]) && index < array.length) {
    index++
  }
  return array.slice(index);
}