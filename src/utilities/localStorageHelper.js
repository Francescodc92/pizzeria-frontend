export const setDataInLocalStorage = (dataIdentifier, data) => {
  localStorage.setItem(dataIdentifier, JSON.stringify(data));
};

export const getDataFromLocalStorage = (dataIdentifier) => {
  return JSON.parse(localStorage.getItem(dataIdentifier));
};
