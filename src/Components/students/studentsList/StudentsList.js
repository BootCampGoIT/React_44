import React from "react";
import StudentsListItem from "./studentsListItem/StudentsListItem";

const StudentsList = ({ students, removeStudent }) => {
  return (
    <ul>
      {students.map(({ name, course, age, id }) => (
        <StudentsListItem
          key={id}
          name={name}
          age={age}
          id={id}
          course={course}
          removeStudent={removeStudent}
        />
      ))}
    </ul>
  );
};

export default StudentsList;
