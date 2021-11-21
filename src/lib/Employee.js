class Employee {
  constructor({ name, id, email }) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
const sumaia = new Employee("sumaia", "111", "sorna.sumaia@gmail.com");
console.log(sumaia.getName());

module.exports = Employee;
