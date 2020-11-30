const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    //GitHub
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub name?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub name!');
              return false;
            }
        }
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
        }
    },
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
        }
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter installation steps!');
              return false;
            }
        }
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this site/app?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter usage instructions!');
              return false;
            }
        }
    },
    // Contributing
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter specific contribution guidelines',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter contribution guidelines!');
              return false;
            }
        }
    },
    // Testing
    {
        type: 'input',
        name: 'test',
        message: 'Enter instructions for testing',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter instructions for testing!');
              return false;
            }
        }
    },
    // License
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'MIT', 'Mozilla', 'WTFPL']
      },

];

// function to initialize program
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        fs.writeFile('README-template.md', generateMarkdown(answers), err => {
          if (err) throw err;});
    })
  

}

// function call to initialize program
init()

