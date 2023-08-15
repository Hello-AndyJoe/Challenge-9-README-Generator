// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}


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