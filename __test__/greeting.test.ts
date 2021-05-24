import greeting from "../src/greeting";

describe("greeting", () => {
  it("should greet with default name if not specified", () => {
    expect(greeting()).toEqual("Hello Guest");
  });
  it("should greet with name", () => {
    expect(greeting("Laszlo")).toEqual("Hello Laszlo");
  });
});
