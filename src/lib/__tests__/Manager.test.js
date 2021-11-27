const Manager = require("../Manager");
const sumaia = new Manager({
  name: "sumaia",
  id: "111",
  email: "sorna.sumaia@gmail.com",
  officeNumber: "012 333 444",
  role: "Manager",
});

describe("Manager", () => {
  test("should be an instance of Manager ", () => {
    expect(sumaia).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {
    expect(sumaia.getName).toBe("sumaia");
  });

  test("should return the expected id", () => {
    expect(sumaia.getId).toBe("111");
  });

  test("should return the expected email", () => {
    expect(sumaia.getEmail).toBe("sorna.sumaia@gmail.com");
  });

  test("should return the expected office number", () => {
    expect(sumaia.getOfficeNumber()).toBe("012 333 444");
  });

  test("should return the expected role", () => {
    expect(sumaia.getRole).toBe("Manager");
  });
});
