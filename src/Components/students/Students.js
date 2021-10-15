import React from "react";
import StudentsForm from "./studentsForm/StudentsForm";
import StudentsList from "./studentsList/StudentsList";

const Students = ({ students, addStudent, removeStudent }) => {
  return (
    <section>
      <StudentsForm addStudent={addStudent} />
      <StudentsList students={students} removeStudent={removeStudent} />
    </section>
  );
};

export default Students;
