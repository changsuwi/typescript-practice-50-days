import { describe, expect, test } from "vitest";
import { createHelloWorld } from "./createHelloWorld";

describe("createHelloWorld", () => {
  test("should return a function", () => {
    const fn = createHelloWorld();
    expect(typeof fn).toBe("function");
  })

  test("should return string hello world", () => {
    const fn = createHelloWorld();
    expect(fn()).toBe("Hello World");
  })

  test("given accept any arguments, it should return string hello world", () => {
    const fn = createHelloWorld();
    expect(fn("foo", "bar")).toBe("Hello World");
  })
});