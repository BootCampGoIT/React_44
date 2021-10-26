import React, { useState } from "react";

import Modal from "../modal/Modal";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";

const Courses = ({ tutors, courses, addCourse, deleteCourse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <>

      {isOpen && (
        <Modal toggle={toggle}>
          <CoursesForm
            tutors={tutors}
            addCourse={addCourse}
            toggleForm={toggle}
          />
        </Modal>
      )}

      <CoursesList
        courses={courses}
        deleteCourse={deleteCourse}
        toggle={toggle}
      />
    </>
  );
};

export default Courses;
