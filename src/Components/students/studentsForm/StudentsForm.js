import React, { Component, useState } from "react";

const initialState = {
  name: "",
  course: "",
  age: "",
};

const StudentsForm = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    age: "",
  });

  const onHandleChange = ({ target }) => {
    const { name, value } = target; //
    setStudent((prev) => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Name
        <input
          type='text'
          value={student.name}
          name='name'
          onChange={onHandleChange}
        />
      </label>
      <label>
        Course
        <input
          type='text'
          value={student.course}
          name='course'
          onChange={onHandleChange}
        />
      </label>
      <label>
        Age
        <input
          type='text'
          value={student.age}
          name='age'
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Add Student</button>
    </form>
  );
};

export default StudentsForm;

// const arr = [10, 20, 30];

// const [, , x] = arr;

// const getRes = (value) => {
//   const x = { value: value };
//   const changeX = (newValue) => {
//     return (x.value = newValue);
//   };
//   return [x, changeX];
// };

// const [name, setName] = getRes(10); //[10, changeX]
// console.log(name); //10
// setName(20);
// console.log(name);
