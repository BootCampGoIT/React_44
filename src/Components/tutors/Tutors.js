import React, { useContext } from "react";
import { MessageContext } from "../App";
import TutorForm from "./TutorForm";

const Tutors = ({ addTutor }) => {
  const { toggle } = useContext(MessageContext);
  return (
    <>
      <button onClick={toggle}>Open</button>
      <hr />
      <TutorForm addTutor={addTutor} />
    </>
  );
};

export default Tutors;
