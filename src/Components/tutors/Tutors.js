import React from "react";
import TutorForm from "./TutorForm";
const Tutors = ({ addTutor }) => {
  return (
    <>
      <TutorForm addTutor={addTutor} />
    </>
  );
};

export default Tutors;
