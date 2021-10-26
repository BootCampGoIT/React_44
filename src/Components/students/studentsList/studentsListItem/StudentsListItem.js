import React from "react";
import { StudentsListItemContainer } from "./StudentsListItemStyled";

const StudentsListItem = ({ name, course, age, id, removeStudent }) => {
  const removeItem = () => removeStudent(id);
  return (
    <StudentsListItemContainer>
      <div className='studentListItemContainer'>
        {/* <div className='tutorListItemAvatarContainer'>
        {avatar ? (
          <img src={avatar} alt={name} className='tutorListItemAvatar' />
        ) : (
          <svg className='tutorListItemDefaultAvatar'>
            <use href={sprite + "#icon-user-tie"} />
          </svg>
        )}
      </div> */}
        <h2>{name}</h2>
        <p>{course}</p>
        <p>{age}</p>
        <button type='button' onClick={removeItem}>
          Remove
        </button>
      </div>
    </StudentsListItemContainer>
    // <li>
    //   <h2>{name}</h2>
    //   <p>{course}</p>
    //   <p>{age}</p>
    //   <button type='button' onClick={removeItem}>
    //     Remove
    //   </button>
    // </li>
  );
};

export default StudentsListItem;
