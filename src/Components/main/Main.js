import React, { Component } from "react";
import Students from "../students/Students";
import Tutors from "../tutors/Tutors";
import Courses from "../courses/Courses";
import {
  addNewItem,
  getItems,
  removeItemByID,
} from "../../services/courses/api_courses";
import LoaderComponent from "../loader/LoaderComponent";

class Main extends Component {
  state = {
    tutors: [],
    courses: [],
    students: [],
    isLoading: false,
    error: "",
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const students = await getItems("students");
      const tutors = await getItems("tutors");
      const courses = await getItems("courses");
      this.setState({ students, tutors, courses });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  addTutor = async (tutor) => {
    this.setState({ isLoading: true });
    try {
      const id = await addNewItem(tutor, "tutors");
      this.setState((prev) => ({
        tutors: [...prev.tutors, { ...tutor, id }],
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  addCourse = async (course) => {
    this.setState({ isLoading: true });
    try {
      const id = await addNewItem(course, "courses");
      this.setState((prev) => ({
        courses: [...prev.courses, { ...course, id }],
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  deleteCourse = async (id) => {
    this.setState({ isLoading: true });
    try {
      await removeItemByID(id, "courses");
      this.setState((prev) => ({
        courses: prev.courses.filter((course) => course.id !== id),
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  addStudent = async (student) => {
    this.setState({ isLoading: true });
    try {
      const id = await addNewItem(student, "students");
      this.setState((prev) => ({
        students: [...prev.students, { ...student, id }],
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  removeStudent = async (id) => {
    this.setState({ isLoading: true });
    try {
      await removeItemByID(id, "students");
      this.setState((prev) => ({
        students: prev.students.filter((student) => student.id !== id),
      }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <main>
        {this.state.isLoading && <LoaderComponent />}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Tutors addTutor={this.addTutor} />
        <Students
          students={this.state.students}
          addStudent={this.addStudent}
          removeStudent={this.removeStudent}
        />
        <Courses
          courses={this.state.courses}
          tutors={this.state.tutors}
          addCourse={this.addCourse}
          deleteCourse={this.deleteCourse}
        />
      </main>
    );
  }
}

export default Main;

// const getData = async () => {
//   const res = () => {
//     console.log("2");
//   };
//   await res();
//   console.log("1");
//   console.log("3");
// };

// getData();
