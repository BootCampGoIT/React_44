import React, { useState, useEffect } from "react";
import Students from "../students/Students";
import Tutors from "../tutors/Tutors";
import Courses from "../courses/Courses";
import {
  addNewItem,
  getItems,
  removeItemByID,
} from "../../services/courses/api_courses";
import LoaderComponent from "../loader/LoaderComponent";
import Section from "../section/Section";
import { MainContainer } from "./MainStyled";

const Main = () => {
  const [tutors, setTutors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    try {
      getItems("students").then((students) => setStudents(students));
      getItems("tutors").then((tutors) => setTutors(tutors));
      getItems("courses").then((courses) => setCourses(courses));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ========= Tutors ==================
  const addTutor = async (tutor) => {
    setIsLoading(true);
    try {
      const id = await addNewItem(tutor, "tutors");
      setTutors((prev) => [...prev, { ...tutor, id }]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ========= Courses ==================
  const addCourse = async (course) => {
    setIsLoading(true);
    try {
      const id = await addNewItem(course, "courses");
      setCourses((prev) => [...prev, { ...course, id }]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCourse = async (id) => {
    setIsLoading(true);
    try {
      await removeItemByID(id, "courses");
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ========= Students ==================

  const addStudent = async (student) => {
    setIsLoading(true);
    try {
      const id = await addNewItem(student, "students");
      setStudents((prev) => [...prev, { ...student, id }]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeStudent = async (id) => {
    setIsLoading(true);
    try {
      await removeItemByID(id, "students");
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <MainContainer>
      {isLoading && <LoaderComponent />}
      {error && <h2>{error}</h2>}
      <Section title='Tutors'>
        <Tutors tutors={tutors} addTutor={addTutor}/>
      </Section>
      <Section title='Students'>
        <Students
          students={students}
          addStudent={addStudent}
          removeStudent={removeStudent}
        />
      </Section>
      <Section title='Courses'>
        <Courses
          courses={courses}
          tutors={tutors}
          addCourse={addCourse}
          deleteCourse={deleteCourse}
        />
      </Section>
    </MainContainer>
  );
};

export default Main;

// class Main extends Component {
//   state = {
//     tutors: [],
//     courses: [],
//     students: [],
//     isLoading: false,
//     error: "",
//   };

//   async componentDidMount() {
//     this.setState({ isLoading: true });
//     try {
//       const students = await getItems("students");
//       const tutors = await getItems("tutors");
//       const courses = await getItems("courses");
//       this.setState({ students, tutors, courses });
//     } catch (error) {
//       this.setState({ error });
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   addTutor = async (tutor) => {
//     this.setState({ isLoading: true });
//     try {
//       const id = await addNewItem(tutor, "tutors");
//       this.setState((prev) => ({
//         tutors: [...prev.tutors, { ...tutor, id }],
//       }));
//     } catch (error) {
//       this.setState({ error });
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   addCourse = async (course) => {
//     this.setState({ isLoading: true });
//     try {
//       const id = await addNewItem(course, "courses");
//       this.setState((prev) => ({
//         courses: [...prev.courses, { ...course, id }],
//       }));
//     } catch (error) {
//       this.setState({ error });
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   deleteCourse = async (id) => {
//     this.setState({ isLoading: true });
//     try {
//       await removeItemByID(id, "courses");
//       this.setState((prev) => ({
//         courses: prev.courses.filter((course) => course.id !== id),
//       }));
//     } catch (error) {
//       this.setState({ error });
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   addStudent = async (student) => {
//     this.setState({ isLoading: true });
//     try {
//       const id = await addNewItem(student, "students");
//       this.setState((prev) => ({
//         students: [...prev.students, { ...student, id }],
//       }));
//     } catch (error) {
//       this.setState({ error });
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   removeStudent = async (id) => {
//     this.setState({ isLoading: true });
//     try {
//       await removeItemByID(id, "students");
//       this.setState((prev) => ({
//         students: prev.students.filter((student) => student.id !== id),
//       }));
//     } catch (error) {
//       this.setState({ error });
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   render() {
//     return (
//       <main>
//         {this.state.isLoading && <LoaderComponent />}
//         {this.state.error && <h2>{this.state.error}</h2>}
//         <Tutors addTutor={this.addTutor} />
//         <Students
//           students={this.state.students}
//           addStudent={this.addStudent}
//           removeStudent={this.removeStudent}
//         />
//         <Courses
//           courses={this.state.courses}
//           tutors={this.state.tutors}
//           addCourse={this.addCourse}
//           deleteCourse={this.deleteCourse}
//         />
//       </main>
//     );
//   }
// }

// export default Main;

// const getData = async () => {
//   const res = () => {
//     console.log("2");
//   };
//   await res();
//   console.log("1");
//   console.log("3");
// };

// getData();
