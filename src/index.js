// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {
  initialQuestions,
  managerQuestions,
  employeeQuestions,
  engineerQuestions,
  internQuestions,
  continueQuestion,
} = require("./question");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const { generateHTML } = require("./lib/utils");

const categoriseTeams = (teams) =>
  teams.reduce(
    (acc, each) => {
      if (each.role === "Manager") acc.manager = [...acc.manager, each];

      if (each.role === "Engineer") acc.engineer = [...acc.engineer, each];

      if (each.role === "Intern") acc.intern = [...acc.intern, each];

      return acc;
    },
    { manager: [], engineer: [], intern: [] }
  );

const start = async () => {
  let inProgress = true;
  const { teamName } = await inquirer.prompt(initialQuestions);

  const teamMembers = [];

  while (inProgress) {
    let { employeeType } = await inquirer.prompt(employeeQuestions);
    console.log(employeeType);

    if (employeeType === "Manager") {
      const { name, id, email, officeNumber } = await inquirer.prompt(
        managerQuestions
      );
      const manager = new Manager({
        name,
        id,
        email,
        officeNumber,
        role: employeeType,
      });
      teamMembers.push(manager);
    }

    if (employeeType === "Engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer({
        name,
        id,
        email,
        github,
        role: employeeType,
      });
      teamMembers.push(engineer);
    }

    if (employeeType === "Intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern({
        name,
        id,
        email,
        school,
        role: employeeType,
      });
      teamMembers.push(intern);
    }

    console.log(teamMembers);

    const { newMember } = await inquirer.prompt(continueQuestion);

    if (!newMember) {
      inProgress = false;
    }
  }

  const teams = categoriseTeams(teamMembers);
  console.log(teams);
  teams.teamName = teamName;
  const html = generateHTML(teams);
  console.log(html);

  writeToFile("./dist/index.html", html);

  process.exit(0);
};

start();
