import React, { useState } from "react";

import TutorForm from "./tutorsForm/TutorForm";
import TutorsList from "./tutorsList/TutorsList";
import Modal from "../modal/Modal.js";

const Tutors = ({ tutors, addTutor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <>
      <TutorsList tutors={tutors} toggle={toggle} />
      {isOpen && (
        <Modal toggle={toggle}>
          <TutorForm addTutor={addTutor} />
        </Modal>
      )}
    </>
  );
};

export default Tutors;
