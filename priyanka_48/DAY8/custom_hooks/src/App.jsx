import React, { useState, useEffect } from "react";

// Custom Hook 1: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Custom Hook 2: useAuth
function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout };
}

// Main App
function App() {
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { user, login, logout } = useAuth();
  const [nameInput, setNameInput] = useState(""); // state for input form

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Navbar / Login */}
      <nav style={{ marginBottom: "20px" }}>
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (nameInput.trim() !== "") login({ name: nameInput });
              setNameInput(""); // clear input after login
            }}
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <button type="submit">Login</button>
          </form>
        )}
      </nav>

      {/* Users List */}
      <h1>Users List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
