const inquirer = require('inquirer');

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
        name: 'License',
        message: 'Select a license for your project',
        choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'MIT', 'Mozilla', 'WTFPL']
      },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt(questions).then(function(answers){
        console.log(answers);
    });

}

// function call to initialize program
init();
