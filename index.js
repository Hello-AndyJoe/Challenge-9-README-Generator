// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // Logs inputs from prompts that are shown in the terminal.
const fs = require("fs"); // Module that allows the code to write the READFILE.md within the computer file system.
const generateMarkdown = require("./utils/generateMarkdown"); // Functions that builds out the code for the README file. 

// The prompts that appear in the terminal.
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
        message: "Project Tests: ",
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

// Function to write README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Input logged.")
    );
}

// Function to initialize program.
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("testREADME.md", generateMarkdown(data));
    });
}

// Function call to initialize app.
init();