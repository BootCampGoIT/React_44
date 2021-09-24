import React from "react";
import PropTypes from "prop-types";
import CourseListItem from "./courseListItem/CourseListItem";

const CoursesList = ({ courses }) => {
  return (
    <ul>
      {courses.map(({ name, level, id, isActive }) => (
        <CourseListItem
          key={id}
          name={name}
          level={level}
          isActive={isActive}
        />
      ))}
    </ul>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
};

export default CoursesList;
