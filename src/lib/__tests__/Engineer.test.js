const Engineer = require("../Engineer");
const sumaia = new Engineer({
  name: "sumaia",
  id: "111",
  email: "sorna.sumaia@gmail.com",
  github: "SumaiaSorna",
  role: "Engineer",
});

describe("Engineer", () => {
  test("should be an instance of Engineer ", () => {
    expect(sumaia).toBeInstanceOf(Engineer);
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

  test("should return the expected github ", () => {
    expect(sumaia.getGitHub()).toBe("SumaiaSorna");
  });

  test("should return the expected role", () => {
    expect(sumaia.getRole).toBe("Engineer");
  });
});
