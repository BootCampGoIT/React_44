import React from "react";
import PropTypes from "prop-types";
import CourseListItem from "./courseListItem/CourseListItem";
import { CourseListItemContainer } from "./courseListItem/CourseListItemStyled";

const CoursesList = ({ courses, deleteCourse, toggleForm }) => {
  return (
    <ul className='flexList'>
      <li onClick={toggleForm}>+</li>
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
    </ul>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
};

export default CoursesList;
