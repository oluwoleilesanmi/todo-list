import { uuid } from "../uuid"

describe("uuid", () => {
  console.log(uuid())
  test("testing", () => {
    expect("one").toBe("one");
  });
});