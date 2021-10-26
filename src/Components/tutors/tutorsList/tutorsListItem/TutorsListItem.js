import React from "react";
import { ListItemContainer } from "./TutorsListItemStyled";
import sprite from "../../../../icons/main/main.svg";

const TutorsListItem = ({ name, avatar }) => {
  return (
    <ListItemContainer>
      <div className='tutorListItemContainer'>
        <div className='tutorListItemAvatarContainer'>
          {avatar ? (
            <img src={avatar} alt={name} className='tutorListItemAvatar' />
          ) : (
            <svg className='tutorListItemDefaultAvatar'>
              <use href={sprite + "#icon-user-tie"} />
            </svg>
          )}
        </div>
        <span className='tutorListItemName'>{name}</span>
      </div>
    </ListItemContainer>
  );
};

export default TutorsListItem;
