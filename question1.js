const students = [
    { id: 1, name: "Aman", marks: 85, attendance: 92 },
    { id: 2, name: "Riya", marks: 38, attendance: 76 },
    { id: 3, name: "Karan", marks: 67, attendance: 81 },
    { id: 4, name: "Simran", marks: 91, attendance: 88 },
    { id: 5, name: "Raj", marks: 45, attendance: 60 },
    { id: 6, name: "Neha", marks: 29, attendance: 95 }
];

let passed = students.filter(s => s.marks >= 40);

let report = students.map(s => {
    let grade;
    if (s.marks >= 80) grade = "A";
    else if (s.marks >= 60) grade = "B";
    else if (s.marks >= 40) grade = "C";
    else grade = "F";

    return {
        name: s.name,
        marks: s.marks,
        attendance: s.attendance,
        grade: grade
    };
});

let avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;

let topper = students.reduce((a, b) => a.marks > b.marks ? a : b);

console.log("Passed Students:");
console.log(passed);

console.log("\nStudent Report:");
console.log(report);

console.log("\nAverage Marks:", avg.toFixed(2));

console.log(`\nTopper: ${topper.name} (${topper.marks})`);
