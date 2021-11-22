const Engineer = require("./Engineer");

describe("Engineer", () => {
  test("should be an instance of Engineer ", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "SumaiaSorna"
    );

    expect(sumaia).toBeInstanceOf(Engineer);
  });

  test("should return the expected name", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "SumaiaSorna"
    );

    expect(sumaia.getName()).toBe("sumaia");
  });

  test("should return the expected id", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "SumaiaSorna"
    );

    expect(sumaia.getId()).toBe("111");
  });

  test("should return the expected email", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "SumaiaSorna"
    );

    expect(sumaia.getEmail()).toBe("sorna.sumaia@gmail.com");
  });

  test("should return the expected github ", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "SumaiaSorna"
    );

    expect(sumaia.getGitHub()).toBe("SumaiaSorna");
  });

  test("should return the expected role", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "Engineer"
    );

    expect(sumaia.getRole()).toBe("Engineer");
  });
});
