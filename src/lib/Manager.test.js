const Manager = require("./Manager");

describe("Manager", () => {
  test("should be an instance of Manager ", () => {
    const sumaia = new Manager(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "00880088"
    );

    expect(sumaia).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {});

  test("should should return the expected id ", () => {});

  test("should should return the expected email", () => {});

  test("should should return the expected role", () => {});
});
