export const setUserLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(localStorage.getItem("user")) : null;
  return user;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem("user");
};
