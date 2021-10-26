import React from "react";
import PropTypes from "prop-types";
import CourseListItem from "./courseListItem/CourseListItem";
import AddItem from "../../addItem/AddItem";
import { CoursesListContainer } from "./CoursesListStyled";

const CoursesList = ({ courses, deleteCourse, toggle }) => {
  return (
    <CoursesListContainer>
      <AddItem toggle={toggle} />

      {courses.map(
        ({ avatar, courseName, id, isActive, duration, mentor, tutor }) => (
          <CourseListItem
            key={id}
            avatar={avatar}
            courseName={courseName}
            isActive={isActive}
            duration={duration}
            mentor={mentor}
            tutor={tutor}
            deleteCourse={deleteCourse}
            id={id}
          />
        )
      )}
    </CoursesListContainer>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
};

export default CoursesList;
