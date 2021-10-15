import axios from "axios";

const addNewTutor = async (tutor) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + "/tutors.json",
      tutor
    );
    return response.data.name;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getTutors = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + "/tutors.json"
    );
    return Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteTutorByID = (id) => {
  try {
    axios.delete(process.env.REACT_APP_BASE_URL + `/tutors/${id}.json`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { deleteTutorByID, getTutors, addNewTutor };
