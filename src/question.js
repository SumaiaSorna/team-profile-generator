//declare a list of questions which will be prompted to the user
const initialQuestions = [
  {
    type: "input",
    message: "Please enter your team name?",
    name: "teamName",
  },
];

const employeeQuestions = [
  {
    type: "list",
    message: "Please Select your team member type",
    name: "employeeType",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Please Enter manager name:",
    name: "name",
  },
  {
    type: "input",
    message: "Please Enter manager ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Please Enter manager Email:",
    name: "email",
  },
  {
    type: "input",
    message: "Please Enter manager officeNumber:",
    name: "officeNumber",
  },
  {
    type: "input",
    message: "Please Enter your role:",
    name: "manager",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Please Enter engineer name:",
    name: "name",
  },
  {
    type: "input",
    message: "Please Enter engineer ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Please Enter engineer Email:",
    name: "email",
  },
  {
    type: "input",
    message: "Please Enter engineer github:",
    name: "github",
  },
  {
    type: "input",
    message: "Please Enter role:",
    name: "engineer",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Please Enter your intern name:",
    name: "name",
  },
  {
    type: "input",
    message: "Please Enter your intern  ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Please Enter your intern Email:",
    name: "email",
  },
  {
    type: "input",
    message: "Please Enter intern school:",
    name: "school",
  },
  {
    type: "input",
    message: "Please Enter your role:",
    name: "intern",
  },
];

const continueQuestion = {
  type: "confirm",
  name: "newMember",
  message: "Do you want to add another team member?",
};

module.exports = {
  initialQuestions,
  employeeQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  continueQuestion,
};
