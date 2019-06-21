import { storage } from "../store"

describe("store", () => {
  test("should return empty array", () => {
    let obj = storage()
    expect(obj.store("test")).toStrictEqual([]);
  });
});