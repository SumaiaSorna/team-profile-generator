// Generate Manager Card
const generateManagerCard = (name, id, email, officeNumber) => {
  return `
  <div class="card my-3 bg-info" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text"><i class="fas fa-briefcase"></i> Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">
      Email:
      <a href="mailto:${email}">${email}@</a>
    </li>
    <li class="list-group-item">Office Number: ${officeNumber}</li>
  </ul>
</div>`;
};

// Generate Engineer Card
const generateEngineerCard = (name, id, email, github) => {
  return `<div class="card my-3 bg-warning" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text"><i class="fas fa-tools"></i> Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">
      Email:
      <a href="mailto:${email}">${email}:</a>
    </li>
    <li class="list-group-item">
      GitHub Link:
      <a href="https://github.com/${github}" target="_blank">${github}</a>
    </li>
  </ul>
</div>`;
};

// Generate Intern Card
const generateInternCard = (name, id, email, school) => {
  return `
  <div class="card my-3 bg-success" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:  ${id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${email}">${email}</a>
            </li>

            <li class="list-group-item">School: ${school}</li>
          </ul>
        </div>`;
};

module.exports = {
  generateManagerCard,
  generateEngineerCard,
  generateInternCard,
};
