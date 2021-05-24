import greeting from "../src/greeting";

describe("greeting", () => {
  it("should greet with name", () => {
    expect(greeting("Laszlo")).toEqual("Hello Laszlo");
  });
});
