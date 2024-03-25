export function dropRightWhile(array: any[], predicate: (value: any) => boolean) {
  let index = array.length - 1
  while(index >= 0) {
    if(!predicate(array[index])) {
      break;
    }
    index--;
  }

  return array.slice(0, index+1);

}