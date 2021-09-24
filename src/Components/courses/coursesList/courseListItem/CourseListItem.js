import React from "react";
import PropTypes from "prop-types";

const CourseListItem = ({ name, level, isActive }) => {
  return (
    <li>
      <h2>Name: {name || "No name"}</h2>
      <p>Level: {level}</p>
      <p>{isActive ? "Active course" : "No active course"}</p>
    </li>
  );
};

CourseListItem.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CourseListItem;
