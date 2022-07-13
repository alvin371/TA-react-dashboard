const getToken = JSON.parse(localStorage.getItem("token"));
const token = `Bearer ${getToken}`;

export const configAuth = {
  Authorization: token,
};
