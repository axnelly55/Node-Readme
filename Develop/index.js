const inquirer = require('inquirer');

const filesystem = require('fs');

const path = require('path');

const generateReadMe = require('./utils/generatereadme')


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your project's title?",
        name: "projectTitle",
      },
      {
        type: "input",
        message: "What is some background info about this project?",
        name: "discription",
      },
      {
        type: "input",
        message: "How should I install dependencies for this project?",
        name: "installation",
        default: "npm i"
      },
      {
        type: "input",
        message: "What do you want users to know about using this project/app?",
        name: "usage",
      },
      {
        type: "input",
        message: "How can a user run tests for this project?",
        name: "testing",
      },
      {
        type: "input",
        message: "If an individual wants to add to the repository how can they go about doing so?",
        name: "contribution",
      },
      {
        type: "list",
        message: "Please choose your project's license?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
];

// function to write README file
function writeToFile(fileName, data) { 
    return filesystem.writeFileSync(path.join(process.cwd(),"README.MD"), data)
}

// function to initialize program
function init() {
   inquirer 
    .prompt(questions) 
        .then(answers => {
            writeToFile(generateReadMe(answers))
        }
    )}
    
// function call to initialize program
init();
