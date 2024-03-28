export function fromParis(pairs: any[][]) {
  const result: any = {};
  for(let pair of pairs) {
    result[pair[0]] = pair[1];
  }
  return result;

  // Equal to
  // return Object.fromEntries(pairs);
}