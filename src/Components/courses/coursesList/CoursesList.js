import React from "react";
import PropTypes from "prop-types";
import CourseListItem from "./courseListItem/CourseListItem";

const CoursesList = ({ courses, deleteCourse }) => {
  return (
    <ul className='flexList'>
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
