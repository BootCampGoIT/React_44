import React, { Component, useState } from "react";
import Modal from "../modal/Modal";
import CoursesForm from "./coursesForm/CoursesForm";
import CoursesList from "./coursesList/CoursesList";


const Courses = ({tutors, courses, addCourse, deleteCourse}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () =>
  setIsFormOpen((prev) => (!prev));
  return (
    <>
      {isFormOpen && (
        <Modal toggle={toggleForm}>
          <CoursesForm
            addCourse={addCourse}
            tutors={tutors}
            toggleForm={toggleForm}
          />
        </Modal>
      )}

      <CoursesList
        courses={courses}
        deleteCourse={deleteCourse}
        toggleForm={toggleForm}
      />
    </>
  );
}

export default Courses;
// class Courses extends Component {
//   state = {
//     isFormOpen: false,
//   };

//   toggleForm = () =>
//     this.setState((prev) => ({ isFormOpen: !prev.isFormOpen }));

//   render() {
//     return (
//       <>
//         {this.state.isFormOpen && (
//           <Modal toggle={this.toggleForm}>
//             <CoursesForm
//               addCourse={this.props.addCourse}
//               tutors={this.props.tutors}
//               toggleForm={this.toggleForm}
//             />
//           </Modal>
//         )}

//         <CoursesList
//           courses={this.props.courses}
//           deleteCourse={this.props.deleteCourse}
//           toggleForm={this.toggleForm}
//         />
//       </>
//     );
//   }
// }

// export default Courses;
