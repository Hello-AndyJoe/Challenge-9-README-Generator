// Apache 2.0 License
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// 
// Boost Software License 1.0
// [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
//
// GNU GPL v3
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
//
// MIT License
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)";
      break
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Boost Software":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

${renderLicenseBadge(data.projectLicense)}


## Description
${data.projectDescription}


## Table of Contents
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contributions](#Contributions)

[Test](#Test)

[License](#License)

[Questions and Contacts](#Questions-and-Contacts)


## Installation
${data.projectInstallation}


## Usage
${data.projectUsage}


## Contributions
${data.projectContributions}


## Test
${data.projectTest}


## License
${data.projectLicense}


## Questions and Contacts
${data.projectEmail}

${data.projectGitHub}
`;
}

module.exports = generateMarkdown;