export function createHelloWorld() {
  return function helloWorld(...args: any[]) {
    return "Hello World";
  }
}