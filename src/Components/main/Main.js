import React, { Component } from "react";
import Courses from "../courses/Courses";
import Tutors from "../tutors/Tutors";
import { v4 as uuidv4 } from "uuid";

class Main extends Component {
  state = {
    tutors: [],
    courses: [],
  };

  addTutor = (tutor) => {
    this.setState((prev) => ({
      tutors: [...prev.tutors, { ...tutor, id: uuidv4() }],
    }));
  };
  addCourse = (course) =>
    this.setState((prev) => ({
      courses: [...prev.courses, { ...course, id: uuidv4() }],
    }));

  deleteCourse = (id) =>
    this.setState((prev) => ({
      courses: prev.courses.filter((course) => course.id !== id),
    }));

  render() {
    return (
      <main>
        <Courses
          courses={this.state.courses}
          tutors={this.state.tutors}
          addCourse={this.addCourse}
          deleteCourse={this.deleteCourse}
        />
        <Tutors addTutor={this.addTutor} />
      </main>
    );
  }
}

export default Main;
