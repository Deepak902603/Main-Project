
import { useState } from "react";

/*
===========================
 REACT TESTING (BASICS)
===========================

IMPORTANT RULE:
❌ @testing-library/react ko App.jsx me import NAHI karte
✅ Testing code alag *.test.jsx file me hota hai

Neeche testing ka example COMMENT me diya hai
taaki aap concept samajh sako – app crash na ho
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>React Testing Basics</h1>

      <p data-testid="count-text">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;

/*
===========================
TESTING CODE (FOR LEARNING)
===========================

Ye code App.jsx me NAHI likhte.
Ye sirf samajhne ke liye hai.

File: App.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("increments count on click", () => {
  render(<App />);

  const button = screen.getByText("Increment");
  fireEvent.click(button);

  expect(screen.getByTestId("count-text"))
    .toHaveTextContent("Count: 1");
});

===========================
*/
