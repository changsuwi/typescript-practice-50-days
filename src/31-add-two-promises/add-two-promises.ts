export function addTwoPromises(a: Promise<number>, b: Promise<number>): Promise<number> {
  return Promise.all([a, b]).then(([a, b]) => a + b);
}