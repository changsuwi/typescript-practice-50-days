export default class ArrayWrapper {
  private array: number[];
  constructor(array: number[]) {
    this.array = array;
  }

  add(other: ArrayWrapper) {

    return this.array.reduce((a: number, b: number) => a + b, 0) + other.array.reduce((a: number, b: number) => a + b, 0);
  }

  toString() {
    return `[${this.array.join(",")}]`;
  }
}