const Employee = require("./Employee");

describe("Employee", () => {
  test("should give us employee name ", () => {
    const sumaia = new Employee("sumaia", "111", "sorna.sumaia@gmail.com");

    expect(sumaia.getName()).toBe("sumaia");
  });

  test("should give us employee id ", () => {
    const sumaia = new Employee("sumaia", "111", "sorna.sumaia@gmail.com");

    expect(sumaia.getId()).toBe("111");
  });

  test("should give us employee email ", () => {
    const sumaia = new Employee("sumaia", "111", "sorna.sumaia@gmail.com");

    expect(sumaia.getEmail()).toBe("sorna.sumaia@gmail.com");
  });

  test("should give us employee role ", () => {
    const sumaia = new Employee("sumaia", "111", "sorna.sumaia@gmail.com");

    expect(sumaia.getRole()).toBe("Employee");
  });
});
