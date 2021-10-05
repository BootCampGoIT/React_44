import React from "react";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";

const Courses = ({ courses, tutors, addCourse, deleteCourse }) => {
  return (
    <>
      <CoursesForm addCourse={addCourse} tutors={tutors}/>
      <CoursesList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
};

export default Courses;
