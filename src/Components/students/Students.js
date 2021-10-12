import React, { Component } from "react";
import StudentsForm from "./studentsForm/StudentsForm";
import StudentsList from "./studentsList/StudentsList";
import { v4 as uuidv4 } from "uuid";

class Students extends Component {
  state = {
    students: JSON.parse(localStorage.getItem("students")) || [],
    x: 0,
  };

  

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.students !== this.state.students) {
      console.log("LS changed");
      localStorage.setItem("students", JSON.stringify(this.state.students));
    }
  }

  increment = () => this.setState((prev) => ({ x: prev.x + 1 }));

  addStudent = (student) => {
    this.setState((prev) => ({
      students: [...prev.students, { ...student, id: uuidv4() }],
    }));
  };

  removeStudent = (id) => {
    this.setState((prev) => ({
      students: prev.students.filter((student) => student.id !== id),
    }));
  };
  render() {
    return (
      <section>
        <button onClick={this.increment}>Increment</button>
        <StudentsForm addStudent={this.addStudent} />
        <StudentsList
          students={this.state.students}
          removeStudent={this.removeStudent}
        />
      </section>
    );
  }
}

export default Students;

// const x = {
//   name: "Alex",
//   x: 10,
// };

// const y = x;

// y.x = 20;

// console.log(`x`, x);
// console.log(`y`, y);
