import React, { useState } from "react";
import StudentsForm from "./studentsForm/StudentsForm";
import StudentsList from "./studentsList/StudentsList";
import Modal from "../modal/Modal.js";

const Students = ({ students, addStudent, removeStudent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <>
      <StudentsList
        students={students}
        removeStudent={removeStudent}
        toggle={toggle}
      />
      {isOpen && (
        <Modal toggle={toggle}>
          <StudentsForm addStudent={addStudent} />
        </Modal>
      )}
    </>
  );
};

export default Students;
