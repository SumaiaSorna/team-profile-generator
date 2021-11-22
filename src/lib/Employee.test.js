const Employee = require("./Employee");
const sumaia = new Employee({
  name: "sumaia",
  id: "111",
  email: "sorna.sumaia@gmail.com",
  role: "Employee",
});

describe("Employee", () => {
  test("should give us employee name ", () => {
    expect(sumaia.getName).toBe("sumaia");
  });

  test("should give us employee id ", () => {
    expect(sumaia.getId).toBe("111");
  });

  test("should give us employee email ", () => {
    expect(sumaia.getEmail).toBe("sorna.sumaia@gmail.com");
  });

  test("should give us employee role ", () => {
    expect(sumaia.getRole).toBe("Employee");
  });
});
