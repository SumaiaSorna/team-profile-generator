class Employee {
  constructor({ name, id, email, role }) {
    this.employeeName = name;
    this.employeeId = id;
    this.employeeEmail = email;
    this.employeeRole = role;
  }

  get getName() {
    return this.employeeName;
  }

  get getId() {
    return this.employeeId;
  }

  get getEmail() {
    return this.employeeEmail;
  }

  get getRole() {
    return this.employeeRole;
  }
}

module.exports = Employee;
