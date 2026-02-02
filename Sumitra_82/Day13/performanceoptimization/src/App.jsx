
import { useState, useMemo, useCallback, memo } from "react";

/* ================= MEMOIZED COUNTER ================= */
const Counter = memo(({ count, onIncrement }) => {
  return (
    <div style={box}>
      <h3 style={heading}>Memoized Counter</h3>
      <p style={text}>Count: {count}</p>
      <button style={button} onClick={onIncrement}>
        Increment
      </button>
    </div>
  );
});

/* ================= VIRTUAL LIST ================= */
function VirtualList({ items }) {
  const ITEM_HEIGHT = 40;
  const BOX_HEIGHT = 200;

  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleCount = Math.ceil(BOX_HEIGHT / ITEM_HEIGHT) + 1;

  const visibleItems = items.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div
      style={{
        ...box,
        height: BOX_HEIGHT,
        overflowY: "auto",
        padding: 0
      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: items.length * ITEM_HEIGHT }}>
        <div style={{ position: "relative", top: startIndex * ITEM_HEIGHT }}>
          {visibleItems.map((item) => (
            <div key={item} style={listItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN APP ================= */
export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const heavyCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 500000; i++) sum += i;
    return sum;
  }, []);

  const items = useMemo(
    () => Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`),
    []
  );

  return (
    <div style={screen}>
      <div style={container}>
        <h2 style={title}>Performance Optimization</h2>
        <p style={subTitle}>Memoization & Virtualization</p>

        <p style={smallText}>
          Heavy Calculation Result: {heavyCalculation}
        </p>

        <Counter count={count} onIncrement={increment} />

        <h3 style={heading}>Virtualized List</h3>
        <VirtualList items={items} />
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

/* 🔴 THIS FIXES LEFT SIDE ISSUE */
const screen = {
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3f4f6"
};

const container = {
  width: 360,
  background: "#ffffff",
  padding: 20,
  borderRadius: 8,
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const box = {
  border: "1px solid #d1d5db",
  padding: 12,
  marginTop: 12,
  borderRadius: 6,
  background: "#ffffff"
};

const title = {
  textAlign: "center",
  color: "#111827"
};

const subTitle = {
  textAlign: "center",
  color: "#374151",
  fontSize: 14
};

const heading = {
  color: "#111827",
  marginBottom: 6
};

const text = {
  color: "#111827"
};

const smallText = {
  fontSize: 13,
  color: "#374151"
};

const button = {
  padding: "6px 12px",
  background: "#111827",
  color: "#ffffff",
  border: "none",
  borderRadius: 4,
  cursor: "pointer"
};

const listItem = {
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid #e5e7eb",
  color: "#111827"
};
