import { useState, useEffect } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // check token on page reload
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // MOCK login validation
    if (email && password) {
      localStorage.setItem("auth_token", "mock-jwt-token-123");
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Authentication UI</h2>

        {!isAuthenticated ? (
          <>
            <p style={styles.subtitle}>Login (Mocked)</p>
            <form onSubmit={handleLogin} style={styles.form}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
              <button type="submit" style={styles.button}>
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <p style={styles.subtitle}>You are logged in ✅</p>
            <p style={styles.token}>
              Token stored in localStorage
            </p>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    width: "350px",
    padding: "25px",
    borderRadius: "10px",
    background: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#dc2626",
    color: "#fff",
    cursor: "pointer",
  },
  token: {
    fontSize: "13px",
    color: "#16a34a",
    marginBottom: "15px",
  },
};
