import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (username) => {
    localStorage.setItem("user", JSON.stringify(username));
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
