export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
export const getUserFromLocalStorage = (user) => {
  const result = localStorage.getItem("user");
  return result ? JSON.parse(result) : null;
};
