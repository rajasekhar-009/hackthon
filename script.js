const employees = [
    { name: "narasimha(kasai)", position: "Software Engineer", department: "Development" },
    { name: "pavan", position: "Project Manager", department: "Management" },
    { name: "rajasekhar", position: "UI/UX Designer", department: "Design" },
    { name: "raju", position: "Quality Analyst", department: "Quality Assurance" },
    { name: "purushotham", position: "Data Scientist", department: "Data Analysis" }
];

window.onload = function() {
    const container = document.getElementById('employee-container');
    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <h2>${employee.name}</h2>
            <p>Position: ${employee.position}</p>
            <p>Department: ${employee.department}</p>
        `;
        container.appendChild(employeeDiv);
    });
}
