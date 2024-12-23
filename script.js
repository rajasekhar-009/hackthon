const students = [
    { name: "Arjun Reddy", age: 20, college: "NIT Warangal", course: "Computer Science" },
    { name: "Priya Singh", age: 22, college: "IIT Madras", course: "Electrical Engineering" },
    { name: "Rahul Sharma", age: 21, college: "BITS Pilani", course: "Mechanical Engineering" },
    { name: "Sneha Rao", age: 23, college: "Anna University", course: "Civil Engineering" },
    { name: "Aakash Patel", age: 24, college: "Delhi University", course: "Commerce" }
];

window.onload = function() {
    const container = document.getElementById('student-container');
    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';
        studentDiv.innerHTML = `
            <h2>${student.name}</h2>
            <p>Age: ${student.age}</p>
            <p>College: ${student.college}</p>
            <p>Course: ${student.course}</p>
        `;
        container.appendChild(studentDiv);
    });
}
