import {describe, test, expect} from "vitest";
import sortBy from "./sortBy";
describe("sortBy", () => {
  test("sort by number", () => {
    const arr = [2,1,7,4,5];
    const sorted = sortBy(arr, (a: number) => a);
    expect(sorted).toEqual([1,2,4,5,7]);
  });

  test("sort by string", () => {
    const arr = ["a", "hhhh", "cc", "ddd"];
    const sorted = sortBy(arr, (a: string) => a.length);
    expect(sorted).toEqual(["a", "cc", "ddd", "hhhh"]);
  });

  test("sort by property of object", () => {
    const arr = [{a: 1}, {a: 7}, {a: 3}];
    const sorted = sortBy(arr, (a: {a: number}) => a.a);
    expect(sorted).toEqual([{a: 1}, {a: 3}, {a: 7}]);
  });
});