class Employee {
  constructor({ name, id, email, role }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  get getName() {
    return this.name;
  }

  get getId() {
    return this.id;
  }

  get getEmail() {
    return this.email;
  }

  get getRole() {
    return this.role;
  }
}

module.exports = Employee;
