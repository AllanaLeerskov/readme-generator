// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');

const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List installation process:'
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please describe project usage:"
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose project license',
            choices: [
                'MIT',
                'Mozilla',
                'Open'
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please list contributors if any'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!");
        }
    });
}; 

// TODO: Create a function to initialize app
 questions() 
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
});

// Function call to initialize app
// questions();
