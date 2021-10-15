import axios from "axios";

const addNewStudent = (student) => {
  return axios.post(process.env.REACT_APP_BASE_URL + "/students.json", student);
};

export { addNewStudent };
