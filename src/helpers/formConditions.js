export const isNameExist = (name, arr, value = "name") =>
  arr.some((item) => item[value].toLowerCase() === name.toLowerCase());
