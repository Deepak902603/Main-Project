
import { useState } from "react";

function UserCard({ name, age, isOnline }) {
  return (
    <div style={styles.card}>
      <div style={styles.avatar}>{name[0]}</div>

      <h2>{name}</h2>
      <p>Age: {age}</p>

      <span style={styles.status}>
        {isOnline ? "🟢 Online" : "🔴 Offline"}
      </span>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Sumitra");

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h1>React Props & State ✨</h1>
        <p style={{ opacity: 0.8 }}>Simple & Clean Example</p>

        <UserCard name={username} age={22} isOnline />

        <h3>Counter: {count}</h3>

        <div style={styles.buttons}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter name"
          style={styles.input}
        />
      </div>
    </div>
  );
}

/* =========================
   Styles
========================= */
const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
  },
  box: {
    width: "360px",
  },
  card: {
    background: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "14px",
    margin: "20px 0",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#6366f1",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  status: {
    display: "inline-block",
    marginTop: "6px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },
};
