import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name) return;

    login(name);
    setShowWelcome(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.btn}>
        Login
      </button>

      {showWelcome && (
        <div style={styles.welcomeBox}>
          🎉 Welcome, {name}!
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  input: {
    padding: "10px",
    width: "220px",
  },
  btn: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  welcomeBox: {
    position: "fixed",
    top: "20%",
    background: "#22c55e",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "8px",
    animation: "float 2s ease-in-out",
  },
};

export default Login;
