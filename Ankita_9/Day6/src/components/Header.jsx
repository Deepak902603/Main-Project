import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h2>ContextApp</h2>

      <div style={styles.links}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>

        {!user && (
          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Login
          </NavLink>
        )}

        {user && (
          <>
            <span>Hello, {user.name}</span>
            <button onClick={logout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#1e293b",
    color: "#fff",
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "16px",
  },
  activeLink: {
    color: "#fff",
    borderBottom: "2px solid #38bdf8",
    paddingBottom: "4px",
  },
  logoutBtn: {
    background: "#ef4444",
    border: "none",
    padding: "6px 12px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Header;
