import React, { Component } from "react";
import Modal from "../modal/Modal";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";

class Courses extends Component {
  state = {
    isFormOpen: false,
  };

  toggleForm = () =>
    this.setState((prev) => ({ isFormOpen: !prev.isFormOpen }));
  render() {
    return (
      <>
        {this.state.isFormOpen && (
          <Modal toggle={this.toggleForm}>
            <CoursesForm
              addCourse={this.props.addCourse}
              tutors={this.props.tutors}
              toggleForm={this.toggleForm}
            />
          </Modal>
        )}

        <CoursesList
          courses={this.props.courses}
          deleteCourse={this.props.deleteCourse}
          toggleForm={this.toggleForm}
        />
      </>
    );
  }
}

export default Courses;


