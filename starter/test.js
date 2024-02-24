const inquirer = require("inquirer");

// Prompt the user for their name
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.name}! Welcome to the Inquirer test.`);
  });