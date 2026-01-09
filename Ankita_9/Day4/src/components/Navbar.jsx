import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>

      <NavLink to="/about" style={styles.link}>
        About
      </NavLink>

      <NavLink to="/contact" style={styles.link}>
        Contact
      </NavLink>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",   // 👈 center links
    gap: "30px",
    marginTop: "20px",
  },
  link: ({ isActive }) => ({
    textDecoration: "underline",
    color: isActive ? "red" : "black",
    fontSize: "18px",
  }),
};

export default Navbar;
