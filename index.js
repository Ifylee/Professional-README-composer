// required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');


// questions Array
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?" 
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?" 
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE", "GPL", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "what command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    }
];

// Function to write README file
const writeToFile = (fileName, data) =>
    fs.writeFileSync(path.join(process.cwd(), fileName), data);


//Function to initialize the process of creating a README file based on user input
   const init = () => {
       inquirer.prompt(questions).then((responses) => {
   // logs a message to indicate that the process of generating the README file is in process.
           console.log("Generating README....");
           writeToFile("README.md", generateMarkdown(responses));
       });
   };

// Function call to initialize app
init();