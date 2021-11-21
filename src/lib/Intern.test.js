const Intern = require("./Intern");

describe("Intern", () => {
  test("should give us intern github ", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "university of birmingham"
    );

    expect(sumaia.getSchool()).toBe("university of birmingham");
  });

  test("should give us engineer role", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "university of birmingham"
    );
    // expect(filterByTerm(input, "link")).toEqual(output);
    expect(sumaia.getRole()).toBe("Intern");
  });
});
