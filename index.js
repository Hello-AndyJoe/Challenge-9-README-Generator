// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Project Name: ",
        name: "projectName",
    },
    {
        type: "input",
        message: "Project Description: ",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "Project Installation Instruction: ",
        name: "projectInstallation",
    },
    {
        type: "input",
        message: "Project Usage: ",
        name: "projectUsage",
    },
    {
        type: "input",
        message: "Project Contributions: ",
        name: "projectContributions",
    },
    {
        type: "input",
        message: "Project Test: ",
        name: "projectTest",
    },
    {
        type: "list",
        message: "Project License: ",
        name: "projectLicense",
        choices: ["Apache License 2.0", "GNU v3.0", "MIT", "Boost Software", "None"]
    },
    {
        type: "input",
        message: "Email Address of Author: ",
        name: "projectEmail",
    },
    {
        type: "input",
        message: "GitHub Username of Author: ",
        name: "projectGitHub",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Input logged.")
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("testREADME.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();