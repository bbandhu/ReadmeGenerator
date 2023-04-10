// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==='MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if(license==='Apache 2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if(license==='GPL 3.0'){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if(license==='BSD 3'){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else{

    return "";
  }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==='None'){
    return "";
  }else {
    return "- [License](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==='None'){
    return "";
  }else {
    return `## License 
    this project is licensed under ${license} License`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.Description}

  ## Table of Contents
   
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  - [Features](#features)
  - [Tests](#tests)

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  ##Features
   
  ${data.features}

  ##Tests

  ${data.tests}



`;
}

module.exports = generateMarkdown;
