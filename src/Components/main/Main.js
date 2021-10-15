import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Students from "../students/Students";
import { addNewStudent } from "../../services/students/api_students";

class Main extends Component {
  state = {
    tutors: [],
    courses: [],
    students: [],
  };

  addTutor = (tutor) => {
    this.setState((prev) => ({
      tutors: [...prev.tutors, { ...tutor, id: uuidv4() }],
    }));
  };
  addCourse = async (course) => {
    try {
      await axios.post(
        `https://ited-fc7ac-default-rtdb.firebaseio.com/courses.json`,
        course
      );

      this.setState((prev) => ({
        courses: [...prev.courses, { ...course, id: uuidv4() }],
      }));
    } catch (error) {}
  };

  deleteCourse = (id) =>
    this.setState((prev) => ({
      courses: prev.courses.filter((course) => course.id !== id),
    }));

  addStudent = (student) => {
    addNewStudent(student).then((response) =>
      this.setState((prev) => ({
        students: [...prev.students, { ...student, id: response.data.name }],
      }))
    );
  };

  removeStudent = (id) => {
    this.setState((prev) => ({
      students: prev.students.filter((student) => student.id !== id),
    }));
  };

  render() {
    return (
      <main>
        <Students
          students={this.state.students}
          addStudent={this.addStudent}
          removeStudent={this.removeStudent}
        />
        {/* <Courses
          courses={this.state.courses}
          tutors={this.state.tutors}
          addCourse={this.addCourse}
          deleteCourse={this.deleteCourse}
        /> */}
        {/* <Tutors addTutor={this.addTutor} /> */}
      </main>
    );
  }
}

export default Main;
