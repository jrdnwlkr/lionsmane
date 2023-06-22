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
       type: 'input',
       message: 'Describe your project.',
       name: 'description', 
    },
    // {
    //     type: 'input',
    //     message: 'What are the steps required to install your project?',
    //     name: 'installation',
    // },
    // {
    //     type: 'input',
    //     message: 'How should your project be used?',
    //     name: 'usage',
    // },
    // {
    //     type: 'input',
    //     message: 'Describe an example of how your project can or should be used.',
    //     name: 'example'
    // },
    // {
    //     type: 'input',
    //     message: 'Who should be credited for this project?',
    //     name: 'credits',
    // }
];

// .then(response => {
//         console.log(response);
//         fs.writeFileSync("README.md", generateMarkdown(response));
//         const { title, description, installation, usage, example, credits } = response;
//         console.log(title, description, installation, usage, example, credits);
//     });
const answers = "";
// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", answers, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Woohoo!")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(response) {
            console.log(response);
        var markdown = generateMarkdown(response);
        writeToFile(markdown)
    });
}

// Function call to initialize app
init();

module.exports = questions;