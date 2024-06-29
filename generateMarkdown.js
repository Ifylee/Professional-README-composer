// Function to generate a formatted markdown string for a README file based on the user's input data. 
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.license}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  To install dependencies, run the following command:

  \`\`\`
  ${data.installation} 

  \`\`\`

  ## Usage
  ${data.usage}
  

  ## License
    This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  Run the following command for tests:
  \`\`\`
  ${data.test}
  \`\`\`


  ## Questions

  For more questions, please open an issue on my github: [${data.github}](https://github.com/${data.github})

  You can also contact me directly at: [${data.email}](mailto:${data.email})

A walkthrough video of my application: [./assets/images/image.png](https://drive.google.com/file/d/1Y3xW-hvpAtckOe-4lEeESHfdhUAhvibF/view?usp=sharing)
`;
};

// Exported for use in other parts of the application
module.exports = generateMarkdown;


