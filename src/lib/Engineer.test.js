const Engineer = require("./Engineer");

describe("Engineer", () => {
  test("should give us engineer github ", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "SumaiaSorna"
    );

    expect(sumaia.getGitHub()).toBe("SumaiaSorna");
  });

  test("should give us engineer role", () => {
    const sumaia = new Engineer(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "Engineer"
    );
    // expect(filterByTerm(input, "link")).toEqual(output);
    expect(sumaia.getRole()).toBe("Engineer");
  });
});
