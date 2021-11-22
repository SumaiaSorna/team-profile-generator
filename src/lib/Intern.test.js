const Intern = require("./Intern");

describe("Intern", () => {
  test("should be an instance of Intern ", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "university of birmingham"
    );

    expect(sumaia).toBeInstanceOf(Intern);
  });

  test("should return the expected name", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "university of birmingham"
    );

    expect(sumaia.getName()).toBe("sumaia");
  });

  test("should return the expected id", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "university of birmingham"
    );

    expect(sumaia.getId()).toBe("111");
  });

  test("should return the expected email", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "012 333 444"
    );

    expect(sumaia.getEmail()).toBe("sorna.sumaia@gmail.com");
  });

  test("should return the expected school", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "university of birmingham"
    );

    expect(sumaia.getSchool()).toBe("university of birmingham");
  });

  test("should return the expected role", () => {
    const sumaia = new Intern(
      "sumaia",
      "111",
      "sorna.sumaia@gmail.com",
      "university of birmingham"
    );

    expect(sumaia.getRole()).toBe("Intern");
  });
});
