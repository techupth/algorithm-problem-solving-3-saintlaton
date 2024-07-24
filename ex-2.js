function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let n = students.length;
  let changePosition;

  for (let i = 0; i < n - 1; i++) {
    changePosition = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (students[j].score < students[j + 1].score) {
        let temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
        changePosition = true;
      }
    }

    if (!changePosition) break;
  }
  return students;
}

let students = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 },
];

let sortedStudents = sortStudentsByScore(students);
console.log(sortedStudents);
