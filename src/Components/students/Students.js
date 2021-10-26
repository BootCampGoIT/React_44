import React, { useState } from "react";
import StudentsForm from "./studentsForm/StudentsForm";
import StudentsList from "./studentsList/StudentsList";
import Modal from "../modal/Modal.js";
import { isNameExist } from "../../helpers/formConditions";

const Students = ({ students, addStudent, removeStudent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const isStudentExist = (name) => isNameExist(name, students);
  return (
    <>
      <StudentsList
        students={students}
        removeStudent={removeStudent}
        toggle={toggle}
      />
      {isOpen && (
        <Modal toggle={toggle}>
          <StudentsForm addStudent={addStudent} toggle={toggle} isStudentExist={isStudentExist}/>
        </Modal>
      )}
    </>
  );
};

export default Students;
