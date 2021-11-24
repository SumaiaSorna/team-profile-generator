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
const {
  generateInternCard,
  generateManagerCard,
  generateEngineerCard,
} = require("./generateCard");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = ({ intern, manager, engineer, teamName }) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- bootstrap css framework -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- Google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;700&display=swap"
      rel="stylesheet"
    />
    <!--custom-style css-->
    <link rel="stylesheet" href="./styles.css" />

    <title>My Team</title>
  </head>
  <body>
    <header>
      <div class="jumbotron text-center">
        <h1 class="display-4">${teamName}</h1>
      </div>
    </header>
    <main>
    <div class="d-flex flex-row flex-wrap justify-content-around">
    ${intern.length ? intern.map(generateInternCard) : ""}
    ${manager.length ? manager.map(generateManagerCard) : ""}
    ${engineer.length ? engineer.map(generateEngineerCard) : ""}
    </div>
    </main>
    <!-- js bundle -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
    console.log("Successfully created index.html!");
  } catch (error) {
    console.log(error.message);
  }
};
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

  // writeToFile("./dist/index.html", html);

  console.log("HTML Webpage Creation = Successful");

  process.exit(0);
};

start();
