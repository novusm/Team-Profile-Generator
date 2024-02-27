// Function to generate HTML for each employee in a database schema type design
const generateEmployeeHTML = (employee) => {
    // Construct HTML for the employee in database schema style
    return `
    <div class="card mb-3">
        <div class="card-header">
            <h5 class="card-title">${employee.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID:</strong> ${employee.getId()}</li>
                <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                ${getRoleSpecificFields(employee)}
            </ul>
        </div>
    </div>
    `;
};

// Function to generate role-specific fields for each employee
const getRoleSpecificFields = (employee) => {
    // Initialize role-specific fields as an empty string
    let roleSpecificFields = '';

    // Add role-specific fields based on the employee's role
    if (employee.getRole() === 'Manager') {
        roleSpecificFields += `<li class="list-group-item"><strong>Office number:</strong> ${employee.getOfficeNumber()}</li>`;
    } else if (employee.getRole() === 'Engineer') {
        roleSpecificFields += `<li class="list-group-item"><strong>GitHub:</strong> <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a></li>`;
    } else if (employee.getRole() === 'Intern') {
        roleSpecificFields += `<li class="list-group-item"><strong>School:</strong> ${employee.getSchool()}</li>`;
    }

    return roleSpecificFields;
};

// Function to generate the entire HTML page
const generateTeamHTML = (team) => {
    const employeeHTML = team.map(employee => generateEmployeeHTML(employee)).join('');
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="bg-primary text-white p-4">
            <h1 class="text-center">My Team</h1>
        </header>
        <main class="container mt-4">
            <div class="row">
                ${employeeHTML}
            </div>
        </main>
    </body>
    
    </html>
    `;
};

module.exports = generateTeamHTML;