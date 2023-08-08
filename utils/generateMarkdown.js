// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== "None" ? `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)` : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "None" ? `This project is licensed under the ${license} license.` : "This project is unlicensed."
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, license, contributors, tests, email, github} = data
  return `# ${title} 
${renderLicenseBadge(license)}
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution)
* [Testing](#testing)
* [Contact](#contact)
## <a id="installation"></a>Installation
${installation}
## <a id="usage"></a>Usage
${usage}
## <a id="license"></a>License
${renderLicenseSection(license)}
## <a id="contribution"></a>Contribution Guidelines
${contributors}
## <a id="testing"></a>Testing
${tests}
## <a id="contact"></a>Contact
If you have a question or experience problems with this project, please contact [${email}](mailto:${email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${github}](https://github.com/${github}).
`;
}

module.exports = generateMarkdown;
