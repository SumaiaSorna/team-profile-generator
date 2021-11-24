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
const generateCard = require("./generateCard");

const generateHTML = () => {
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
        <h1 class="display-4">My Team!!</h1>
      </div>
    </header>
    <main>
      <div class="d-flex flex-row flex-wrap justify-content-around">
        <div class="card my-3 bg-info" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text"><i class="fas fa-briefcase"></i> Manager</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 1</li>
            <li class="list-group-item">
              Email:
              <a href="mailto:saniulalam@gmail.com">saniulalam@gmail.com</a>
            </li>
            <li class="list-group-item">Office Number: 012 333 444</li>
          </ul>
        </div>

        <div class="card my-3 bg-warning" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Saafir Sani</h5>
            <p class="card-text"><i class="fas fa-tools"></i> Engineer</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 2</li>
            <li class="list-group-item">
              Email:
              <a href="mailto:saafirsani@gmail.com">saafirsani@gmail.com</a>
            </li>
            <li class="list-group-item">
              GitHub Link:
              <a href="https://github.com/Saafir" target="_blank">Saafir</a>
            </li>
          </ul>
        </div>

        <div class="card my-3 bg-warning" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Safeerah Sarwana</h5>
            <p class="card-text"><i class="fas fa-tools"></i> Engineer</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 3</li>
            <li class="list-group-item">
              Email: <a href="mailto:safeerah@gmail.com">safeerah@gmail.com</a>
            </li>

            <li class="list-group-item">
              GitHub Link:
              <a href="https://github.com/Safeerah" target="_blank">Safeerah</a>
            </li>
          </ul>
        </div>

        <div class="card my-3 bg-success" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Mahmuda Akhter</h5>
            <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 4</li>
            <li class="list-group-item">
              Email: <a href="mailto:mahmuda@gmail.com">mahmuda@gmail.com</a>
            </li>

            <li class="list-group-item">School: University of Birmingham</li>
          </ul>
        </div>

        <div class="card my-3 bg-success" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Sazia Ahmed</h5>
            <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 5</li>
            <li class="list-group-item">
              Email: <a href="mailto:sazia@gmail.com">sazia@gmail.com</a>
            </li>

            <li class="list-group-item">School: University of Birmingham</li>
          </ul>
        </div>
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
module.exports = writeToFile;

const start = async () => {
  let inProgress = true;
  // const notes = [];

  while (inProgress) {
    //   const { noteType } = await inquirer.prompt(noteTypeQuestion);

    //   if (noteType === "BILL") {
    //     const { text, amount, date } = await inquirer.prompt(billQuestions);
    //     const bill = new Bill({ text, amount, date });
    //     notes.push(bill);
    //   }

    //   if (noteType === "TODO") {
    //     const { text, date, status } = await inquirer.prompt(todoQuestions);
    //     const todo = new Todo({ text, date, status });
    //     notes.push(todo);
    //   }

    //   if (noteType === "APPOINTMENT") {
    //     const { text, date, eventType, otherEvent } = await inquirer.prompt(
    //       appointmentQuestions
    //     );
    //     const appointment = new Appointment({
    //       text,
    //       date,
    //       eventType,
    //       otherEvent,
    //     });
    //     notes.push(appointment);
    //   }

    //   const { anotherNote } = await inquirer.prompt(continueQuestion);

    //   if (!anotherNote) {
    //     inProgress = false;
    //   }
    // }

    // const categorisedNotes = categoriseNotes(notes);

    const html = generateHtml(categorisedNotes);

    writeToFile("./dist/index.html", html);

    console.log("Successfully generated HTML!!");

    process.exit(0);
  }
};

start();
