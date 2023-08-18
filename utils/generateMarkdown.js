// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "Boost Software":
      return "![License: Boost Software](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
    case "GNU v3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "Boost Software":
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    case "GNU v3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  }
  return `[${renderLicenseBadge(license)}]${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

${renderLicenseSection(data.projectLicense)}


## Description
${data.projectDescription}


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Test](#test)
* [License](#license)
* [Questions and Contacts](#questions-and-contacts)


## Installation
${data.projectInstallation}


## Usage
${data.projectUsage}


## Contributions
${data.projectContributions}


## Tests
${data.projectTest}


## License
${data.projectLicense}


## Questions and Contacts
Visit other repositories created by me at [github.com/${data.projectGitHub}](https://github.com/${data.projectGitHub})

If you have questions, please email me at [${data.projectEmail}](mailto:${data.projectEmail})
`;
}

module.exports = generateMarkdown;