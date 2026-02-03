import { useState } from "react";
import { loginUser } from "./auth";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = loginUser(email, password);
    if (success) {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default Login;
