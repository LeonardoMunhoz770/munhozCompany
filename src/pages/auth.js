export const isAuthenticated = () => {
  const token = localStorage.getItem("AccesToken");
  if (token === "" || token === null || token === undefined) {
    return false;
  } else {
    return true;
  }
};
