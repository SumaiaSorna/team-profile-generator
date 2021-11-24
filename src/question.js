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
    name: "managerName",
  },
  {
    type: "input",
    message: "Please Enter manager ID:",
    name: "managerID",
  },
  {
    type: "input",
    message: "Please Enter manager Email:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Please Enter manager officeNumber:",
    name: "managerOfficeNumber",
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
    name: "engineerName",
  },
  {
    type: "input",
    message: "Please Enter engineer ID:",
    name: "engineerID",
  },
  {
    type: "input",
    message: "Please Enter engineer Email:",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Please Enter engineer github:",
    name: "engineerGithub",
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
    name: "intern Name",
  },
  {
    type: "input",
    message: "Please Enter your intern  ID:",
    name: "internID",
  },
  {
    type: "input",
    message: "Please Enter your intern Email:",
    name: "internEmail",
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
