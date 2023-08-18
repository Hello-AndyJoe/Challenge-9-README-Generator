# Challenge 9 Node README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
All repositories of code should contain a README to help others know how to interact with the code, its purpose, to give credit along with citation to outside sources, and various other facets of the repository that will increasing the understanding of the code. The purpose of this web application is to help users unfamiliar with the structure and syntax of a README Markdown file by giving them prompts which will then generate a README file.


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Test](#test)
* [License](#license)
* [Questions and Contacts](#questions-and-contacts)


## Installation
[Visual Studio Code](https://code.visualstudio.com/) or a similar program need to be installed.

Node.js will need to be installed onto the user’s computer. [nodejs.org](https://nodejs.org/en) This link provides the application. It is recommended to use the version 18.17.1 LTS.

GitBash will also need to be installed on the same computer. [git-scm.com](https://git-scm.com/downloads)

Once Node.js and GitBash have been successfully installed on the computer, clone this GitHub repository to a desired folder on the computer.

The repository does not include the modules from the Inquirer NPM. Install them in the same folder that you have placed the repository by running `npm i inquirer@8.2.4` in a GitBash terminal in Visual Studio Code or similar application. 


## Usage
Once you've completed the steps outlined in the Installation process of this repository, you can use the README Generator. To start, open in Visual Studio Code the folder that holds this repository that you cloned from the installation process. Run `node index.js` in this folder. This will start a series of prompts in the terminal. Answer the prompts accordingly and it will will display 'Input logged'. This means a README file has been generated in the repository folder. It will be named testREADME.md. The user that can use this file as they please.


## Contributions
Starting code provided by the Full Stack Bootcamp.

[NPM Inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) and its documentation used for the construction of the questions that appear via prompts. 

Structure of the function `writeToFile()` and `init()` modeled after activity 13-Ins_Read-Write-file and 19-Ins_Inquirer-Demo in the NodeJS module of the Full Stack Bootcamp gitlab.

This site used for reference for the markdown syntax. - [markdownguide.org](https://www.markdownguide.org/basic-syntax/)


## Test
n/a


## License
MIT


## Questions and Contacts
Visit other repositories created by me at [github.com/hello-andyjoe](https://github.com/hello-andyjoe)

If you have questions, please email me at [andrew.joseph.roper@gmail.com](mailto:andrew.joseph.roper@gmail.com)