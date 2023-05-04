// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(".generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Application title?",
  },

  {
    type: "input",
    name: "github",
    message: "Enter your Github username.",
  },

  {
    type: "input",
    name: "repo",
    message: "Enter the name of your application Github repository.",
  },

  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your application.",
  },

  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your application.",
  },

  {
    type: "input",
    name: "documentation",
    message: "Describe the installation process and operating instructions.",
  },

  {
    type: "input",
    name: "usage",
    message: "How will your application be used?",
  },

  {
    type: "input",
    name: "screenshot",
    message: "please enter relative path for your screenshot image.",
  },

  {
    type: "input",
    name: "features",
    message: "What are the main features of the application?",
  },

  {
    type: "input",
    name: "acknowledgements",
    message: "Who contributed to this project?",
  },

  {
    type: "list",
    message: "what license are you using? ",
    name: "license",
    choices: ["AAL", "ISC", "MIT", "NTP", "W3C"],
  },

  {
    type: "input",
    name: "testing",
    message: "What is the process used to test this application?",
  },

  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];
// end of question array //

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    const markdownString = generateMarkdown(userInput);

    // TODO: Create a function to write README file
    fs.writeFile("README.md", markdownString, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Look at your spiffy new README!");
      }
    });
  });
}

// Function call to initialize app
init();
