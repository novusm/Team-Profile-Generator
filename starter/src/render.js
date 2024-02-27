// Function to generate HTML for each employee in a database schema type design
const generateEmployeeHTML = (employee) => {
    // Construct HTML for the employee in database schema style
    return `
        <div class="employee">
            <div class="field">Name:</div>
            <div class="value">${employee.getName()}</div>
            <div class="field">Employee ID:</div>
            <div class="value">${employee.getId()}</div>
            <div class="field">Email:</div>
            <div class="value">${employee.getEmail()}</div>
            ${getRoleSpecificFields(employee)}
        </div>
    `;
};

// Function to generate role-specific fields for each employee
const getRoleSpecificFields = (employee) => {
    // Initialize role-specific fields as an empty string
    let roleSpecificFields = '';

    // Add role-specific fields based on the employee's role
    if (employee.getRole() === 'Manager') {
        roleSpecificFields += `
            <div class="field">Office Number:</div>
            <div class="value">${employee.getOfficeNumber()}</div>
        `;
    } else if (employee.getRole() === 'Engineer') {
        roleSpecificFields += `
            <div class="field">GitHub:</div>
            <div class="value">${employee.getGithub()}</div>
        `;
    } else if (employee.getRole() === 'Intern') {
        roleSpecificFields += `
            <div class="field">School:</div>
            <div class="value">${employee.getSchool()}</div>
        `;
    }

    return roleSpecificFields;
};
