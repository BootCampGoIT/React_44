import React, { useState } from "react";

import TutorForm from "./tutorsForm/TutorForm";
import TutorsList from "./tutorsList/TutorsList";
import Modal from "../modal/Modal.js";
import { isNameExist } from "../../helpers/formConditions";

const Tutors = ({ tutors, addTutor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const isTutorExist = (name) => isNameExist(name, tutors);
  return (
    <>
      <TutorsList tutors={tutors} toggle={toggle} />
      {isOpen && (
        <Modal toggle={toggle}>
          <TutorForm
            addTutor={addTutor}
            toggle={toggle}
            isTutorExist={isTutorExist}
          />
        </Modal>
      )}
    </>
  );
};

export default Tutors;
