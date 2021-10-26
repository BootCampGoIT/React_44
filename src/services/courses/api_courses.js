import axios from "axios";

const addNewItem = async (body, path) => {
  try {
    const response = await axios.post(z
      process.env.REACT_APP_BASE_URL + `/${path}.json`,
      body
    );
    return response.data.name;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getItems = async (path) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `/${path}.json`
    );
    return response.data
      ? Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }))
      : [];
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeItemByID = (id, path) => {
  try {
    axios.delete(process.env.REACT_APP_BASE_URL + `/${path}/${id}.json`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { addNewItem, getItems, removeItemByID };
