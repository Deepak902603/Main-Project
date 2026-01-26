import React, { useState, useMemo } from "react";
import "./App.css";

// Memoized List Item
const ListItem = React.memo(({ item }) => {
  console.log("Rendering item:", item);
  return <li className="item">{item}</li>;
});

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  // Large list (simulating heavy data)
  const items = useMemo(() => {
    console.log("Generating list...");
    return Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  }, []);

  // Filtered list (optimized)
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  return (
    <div className="container">
      <h1> Performance Optimization Demo</h1>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="list">
        {filteredItems.map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
