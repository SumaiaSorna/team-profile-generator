const {
  generateInternCard,
  generateManagerCard,
  generateEngineerCard,
} = require("../generateCard");

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
      ${manager.length ? manager.map(generateManagerCard) : ""}
      ${engineer.length ? engineer.map(generateEngineerCard) : ""}
      ${intern.length ? intern.map(generateInternCard) : ""}
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

module.exports = generateHTML;
