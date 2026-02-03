export const loginUser = (email, password) => {
  if (email === "admin@gmail.com" && password === "123456") {
    localStorage.setItem("token", "mock-jwt-token");
    console.log("token saved");
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
