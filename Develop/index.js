// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');
 
// TODO: Create an array of questions for user input
const questions = [   
    {
       type: 'input',
       message: 'What is the title of your project?',
       name: 'title', 
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0']
     },
    {
       type: 'input',
       message: 'Describe your project.',
       name: 'description', 
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How should your project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?'
    },
    {
        type: 'input',
        message: 'How do you test this project?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What email can questions be sent to?',
        name: 'email',
    }
];

// .then(response => {
//         console.log(response);
//         fs.writeFileSync("README.md", generateMarkdown(response));
//         const { title, description, installation, usage, example, credits } = response;
//         console.log(title, description, installation, usage, example, credits);
//     });
// const answers = "";
// // TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        console.log(fileContent)
        writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

module.exports = questions;