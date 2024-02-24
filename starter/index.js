// index.js
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

// Function to prompt for Manager's information
const promptManager = async () => {
    const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:",
        },
    ];

    const answers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
};

// Function to prompt for Engineer's information
const promptEngineer = async () => {
    const engineerQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:",
        },
    ];

    const answers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
};

// Function to prompt for Intern's information
const promptIntern = async () => {
    const internQuestions = [
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:",
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:",
        },
    ];

    const answers = await inquirer.prompt(internQuestions);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
};

// Function to prompt user to add another team member or finish building the team
const promptNextAction = async () => {
    const nextActionQuestion = {
        type: "list",
        name: "action",
        message: "What would you like to do next?",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    };

    const answer = await inquirer.prompt(nextActionQuestion);
    return answer.action;
};

// Function to initialize the application
const init = async () => {
    console.log("Welcome to the Team Profile Generator!");

    // Prompt for manager's information
    await promptManager();

    let nextAction;
    do {
        // Prompt for next action
        nextAction = await promptNextAction();

        // Based on the selected action, prompt for engineer's or intern's information
        switch (nextAction) {
            case "Add an engineer":
                await promptEngineer();
                break;
            case "Add an intern":
                await promptIntern();
                break;
        }
    } while (nextAction !== "Finish building the team");

    // Generate HTML and write to file
    const html = render(teamMembers);
    fs.writeFileSync(outputPath, html);

    console.log(`Team profile generated successfully! Check ${outputPath}`);
};

// Call init function to start the application
init();
