export default function sortBy<T>(arr: T[], fn: (a: T) => number): T[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}