// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// const writeToFile = () => {};

module.exports = writeToFile;

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
    console.log("Successfully created index.html!");
  } catch (error) {
    console.log(error.message);
  }
};

// const start = async () => {
//   // prompt the questions using inquirer
//   // generate readme based on answers
//   const readme = generateReadme();

//   // write generated readme to a file
//   writeToFile("GENERATED_README.md", readme);
// };

// start();
