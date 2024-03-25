import { beforeEach, describe, expect, test } from "vitest";
import { promiseRace } from "./promise.race";

let p1: Promise<any>, p2: Promise<any>, p3: Promise<any>, p4: Promise<any>, p5: Promise<any>;

describe("promise.race", () => {
  beforeEach(() => {
    p1 = Promise.resolve(33);
    p2 = Promise.resolve(44);
    p3 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 500, "one");
    });
    p4 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 100, "twe");
    });
    p5 = new Promise(function (resolve, reject) {
      setTimeout(reject, 50, "error");
    });
  });
  test("two immediately resolved promises, should return first one. value should be 3", () => {
    const promise = promiseRace([p1, p2]);
    promise.then((val) => {
      expect(val).toBe(33);
    });
  });
  test("one immediately resolve and one setTimeout, value should be 44", () => {
    const promise = promiseRace([p3, p2]);
    promise.then((val) => expect(val).toBe(44));
  });
  test("two setTimeout promises, should resolve faster one. value should be two", () => {
    const promise = promiseRace([p3, p4]);
    promise.then((val) => expect(val).toBe("two"));
  });

  test("two setTimeout promises, should reject faster one. value should be error", () => {
    const promise = promiseRace([p4, p5]);
    promise.then((val) => expect(val).toBe("error"));
  });

  test("empty array, val should be undefined", () => {
    const promise = promiseRace([]);
    promise.then((val) => expect(val).toBe(undefined)); 
  })
});
