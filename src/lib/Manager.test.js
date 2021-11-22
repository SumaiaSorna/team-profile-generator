const Manager = require("./Manager");

describe("Manager", () => {
  test("should be an instance of Manager ", () => {
    const sumaia = new Manager(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "012 333 444"
    );

    expect(sumaia).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {
    const sumaia = new Manager(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "012 333 444"
    );

    expect(sumaia.getName()).toBe("sumaia");
  });

  test("should return the expected id", () => {
    const sumaia = new Manager(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "012 333 444"
    );

    expect(sumaia.getId()).toBe("111");
  });

  test("should return the expected email", () => {
    const sumaia = new Manager(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "012 333 444"
    );

    expect(sumaia.getEmail()).toBe("sorna.sumaia@gmail.com");
  });

  test("should return the expected office number", () => {
    const sumaia = new Manager(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "012 333 444"
    );

    expect(sumaia.getOfficeNumber()).toBe("012 333 444");
  });

  test("should return the expected role", () => {
    const sumaia = new Manager("sumaia", "111", "sorna.sumaia@gmail.com");

    expect(sumaia.getRole()).toBe("Manager");
  });
});
