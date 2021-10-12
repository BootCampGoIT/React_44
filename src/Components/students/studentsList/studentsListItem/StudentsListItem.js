import React from "react";

const StudentsListItem = ({ name, course, age, id, removeStudent }) => {
  const removeItem = () => removeStudent(id);
  return (
    <li>
      <h2>{name}</h2>
      <p>{course}</p>
      <p>{age}</p>
      <button type='button' onClick={removeItem}>
        Remove
      </button>
    </li>
  );
};

export default StudentsListItem;
