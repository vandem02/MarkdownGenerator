// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide instructions on how to install the project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use the project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["None", "MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors and their contributions. (<Enter> if there are none)",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide a walkthrough of required tests.",
  },
  {
    type: "input",
    name: "email",
    message: "How should a user contact you if they experience problems with your project? (Enter an email address.)",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating professional README.md file...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    console.log("Done. Please check the dist folder for your generated README.")
  });
}

// Function call to initialize app
init();
