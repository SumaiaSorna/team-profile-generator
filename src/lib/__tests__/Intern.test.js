const Intern = require("../Intern");
const sumaia = new Intern(
  "sumaia",
  "111",
  "sorna.sumaia@gmail.com",
  "university of birmingham",
  "Intern"
);

describe("Intern", () => {
  test("should be an instance of Intern ", () => {
    expect(sumaia).toBeInstanceOf(Intern);
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

  test("should return the expected school", () => {
    expect(sumaia.getSchool()).toBe("university of birmingham");
  });

  test("should return the expected role", () => {
    expect(sumaia.getRole).toBe("Intern");
  });
});
