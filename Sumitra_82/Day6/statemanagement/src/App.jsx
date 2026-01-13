import React, { createContext, useContext, useState } from "react";

/* ===============================
   1. Create Theme Context
================================ */
const ThemeContext = createContext();

/* ===============================
   2. Theme Provider
================================ */
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* ===============================
   3. Navbar Component
================================ */
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Navbar</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

/* ===============================
   4. Content Component
================================ */
function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#111",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "150px",
      }}
    >
      <h2>Content Area</h2>
      <p>Current Theme: <b>{theme}</b></p>
    </div>
  );
}

/* ===============================
   5. App Component
================================ */
export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}
