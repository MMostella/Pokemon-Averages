import { height } from "./index";

describe("checking arrays", () => {
  test("height array to be empty at the start of execution", () => {
    expect(height.length.toBe(0));
  });
  test("height array not empty at the end of execution", () => {
    sleep();
    expect(height.length.not.toBe(0));
  });
});
