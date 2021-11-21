const Employee = require("./Employee");

describe("Employee", () => {
  test("should give us employee name ", () => {
    const sumaia = new Employee("sumaia", "111", "sorna.sumaia@gmail.com");
    // expect(filterByTerm(input, "link")).toEqual(output);
    expect(sumaia.getName()).toBe("sumaia");
  });

  test("should ", () => {});

  test("should ", () => {});

  test("should ", () => {});

  test("should ", () => {});
});
