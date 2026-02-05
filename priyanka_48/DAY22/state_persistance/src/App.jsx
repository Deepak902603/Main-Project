import { useState, useEffect } from "react";

function App() {
  // ✅ LOAD FROM LOCALSTORAGE FIRST
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved !== null ? Number(saved) : 0;
  });

  // ✅ SAVE ONLY WHEN count CHANGES
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Day 22 – State Persistence</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <p>Refresh page — count will stay same ✅</p>
    </div>
  );
}

export default App;
