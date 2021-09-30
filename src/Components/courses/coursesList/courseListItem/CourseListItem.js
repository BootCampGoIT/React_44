import React from "react";
import PropTypes from "prop-types";
import { CourseListItemContainer } from "./CourseListItemStyled";

const CourseListItem = ({ name, level, isActive }) => {
  return (
    <CourseListItemContainer isActive={isActive}>
      <h2>Name: {name || "No name"}</h2>
      <p>Level: {level}</p>
      <p className='courseListItemStatus'>
        {isActive ? "Active course" : "No active course"}
      </p>
      <div className='courseDetails'>
        <button type='button'> Details</button>
      </div>
    </CourseListItemContainer>
  );
};

CourseListItem.defaultProps = {
  level: "medium",
};

CourseListItem.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default CourseListItem;
