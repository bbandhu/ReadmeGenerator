const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questions = [
  {
    name: "projectTitle",
    message: "<Your-Project-Title>",
    type: "input",
  },
  {
    name: "Description",
    message: "Description",
    type: "input",
  },
  {
    name: "Installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    type: "input",
  },
  {
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
    type: "input",
  },
  {
    name: "credits",
    message: "#Credits",
    type: "input",
  },

  {
    name:"license",
    message:"what license is this project under?",
    type:"list",
    choices:['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },

  {
    name:"features",
    message :"what the features?",
    type:"input"
  },
  {
    name:"tests",
    message:"Is your code have test coverage?",
    type:"input"
  },

];

inquirer
  .prompt(questions)
  .then((data) => {
    fs.writeFileSync("readme.md", generateMarkdown(data));
  })
  .catch((error) => {
    console.log(error);
  });


