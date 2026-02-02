import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Step 1: show loading (like real API)
    setMessage("Checking credentials... ⏳");

    // Step 2: REAL mock API call using json-server
   fetch("http://localhost:3001/users")
  .then((res) => {
    console.log("Response status:", res.status);
    return res.json();
  })
  .then((users) => {
    console.log("Users from server:", users);
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setMessage("Login successful ✅");
    } else {
      setMessage("Invalid credentials ❌");
    }
  })
  .catch((err) => {
    console.error("Fetch error:", err);
    setMessage("Server error ❌");
  });
  
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;