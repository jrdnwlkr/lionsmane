const fs = require('fs')
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'GPL v3.0') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'MIT') {
    licenseBadge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else (licenseURL = '')

  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseURL = '';
  if (license === 'GPL v3.0') {
    licenseURL = 'https://www.gnu.org/licenses'
  } else if (license === 'MIT') {
    licenseURL = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseURL = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else (licenseURL = '')

  return licenseURL
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license = 'None') {
    licenseSection = ''
  } else (licenseSection = `License: ${license} `)

  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents
  ### [License](license)
  ### [Description](description)
  ### [Installation](installation)
  ### [Usage](usage)
  ### [Example](example)
  ### [Credits](credits)

  ## Description
  ${data.description}

  ## License
  ${data.license}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}

  ## Questions
  If you have questions about this project contact 
  ${data.username} or ${data.email}.
`;
}

module.exports = generateMarkdown;
