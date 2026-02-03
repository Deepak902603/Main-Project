import { useState } from "react";
import Login from "./auth/Login";
import Dashboard from "./auth/Dashboard";
import { isAuthenticated } from "./auth/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  return (
    <>
      {loggedIn ? (
        <Dashboard onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
