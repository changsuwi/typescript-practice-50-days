import { describe, expect, test } from "vitest";
import { get } from "./get";

describe("get", () => {
  const object = { a: [{ b: { c: 3 } }] };
  test("pathParam includes array index", () => {
    expect(get(object, "a[0].b.c")).toBe(3);
  });

  test("can not find target, use default", () => {
    expect(get(object, "a[100].b.c", "default")).toBe("default");
  });

  test("pathParam as Array", () => {
    expect(get(object, ['a', 0, 'b', 'c'])).toBe(3)
  })
});
