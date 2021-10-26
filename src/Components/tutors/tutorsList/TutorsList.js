import React from "react";
import AddItem from "../../addItem/AddItem";
import TutorsListItem from "./tutorsListItem/TutorsListItem";
import { TutorsListContainer } from "./TutorsListStyled";

const TutorsList = ({ tutors, toggle }) => {
  return (
    <TutorsListContainer>
      <AddItem toggle={toggle} />
      {tutors.map((tutor) => (
        <TutorsListItem
          key={tutor.id}
          name={tutor.name}
          avatar={tutor.avatar}
        />
      ))}
    </TutorsListContainer>
  );
};

export default TutorsList;
