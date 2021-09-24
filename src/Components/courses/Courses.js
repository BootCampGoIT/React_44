import React from "react";
import { data } from "../../data/data";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";

const Courses = () => {
  return (
    <>
      <CoursesForm />
      <CoursesList courses={data.courses} />
    </>
  );
};

export default Courses;
