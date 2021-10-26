import React from "react";
import StudentsListItem from "./studentsListItem/StudentsListItem";
import { StudentsListContainer } from "./StudentsListStyled.js";
import AddItem from "../../addItem/AddItem.js";

const StudentsList = ({ students, removeStudent, toggle }) => {
  return (
    <StudentsListContainer>
      <AddItem toggle={toggle} />
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
    </StudentsListContainer>
  );
};

export default StudentsList;
