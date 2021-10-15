import axios from "axios";

const addNewStudent = async (student) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + "/students.json",
      student
    );
    return response.data.name;
  } catch (error) {
    throw new Error(error.message);
  }
};
const removeStudentByID = async (id) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_BASE_URL + `/students/${id}.json`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getStudents = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + "/students.json"
    );

    const keys = Object.keys(response.data);
    // console.log(`keys`, keys); //['-Mm3ukVUYXap3REpgy45', '-Mm3wz-ihvRW0mcJ2sw6']
    const students = keys.map((key) => ({ id: key, ...response.data[key] }));
    // console.log(students);

    return students;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { addNewStudent, getStudents, removeStudentByID };
