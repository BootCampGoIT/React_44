import React from "react";
import PropTypes from "prop-types";
import { CourseListItemContainer } from "./CourseListItemStyled";

const CourseListItem = ({
  avatar,
  courseName,
  id,
  isActive,
  duration,
  mentor,
  tutor,
  deleteCourse,
}) => {
  const deleteItem = () => deleteCourse(id);
  return (
    <CourseListItemContainer isActive={isActive}>
      <h2>{courseName || "No name"}</h2>
      <img src={avatar} alt={courseName} />
      <p>Mentor: {mentor}</p>
      <p>Tutor: {tutor}</p>
      <p>Duration: {duration}</p>
      <p className='courseListItemStatus'>
        {isActive ? "Active course" : "No active course"}
      </p>
      <div className='courseDetails'>
        <button type='button'> Details</button>
        <button type='button' onClick={deleteItem}>
          Delete
        </button>
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
