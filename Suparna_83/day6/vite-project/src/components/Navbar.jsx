import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {user && <span>Hello, {user}</span>}
    </nav>
  );
}

export default Navbar;
