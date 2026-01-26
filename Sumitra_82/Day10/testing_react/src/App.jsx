
import { useState } from "react";

/*
=================================
 PERFECT CENTER COUNTER APP
=================================
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">
      <div className="card">
        <div className="icon">🚀</div>

        <h1>Counter App</h1>

        <p>
          Simple React example using <b>useState</b>
        </p>

        <div className="count">{count}</div>

        <div className="buttons">
          <button className="inc" onClick={() => setCount(count + 1)}>
            ➕ Increase
          </button>
          <button className="reset" onClick={() => setCount(0)}>
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
=====================
 GLOBAL STYLES
=====================
*/

const style = document.createElement("style");
style.innerHTML = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .app-wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    font-family: Arial, sans-serif;
  }

  .card {
    background: white;
    width: 100%;
    max-width: 360px;
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 12px 30px rgba(0,0,0,0.2);
  }

  .icon {
    font-size: 40px;
    margin-bottom: 8px;
  }

  .count {
    font-size: 42px;
    font-weight: bold;
    color: #4f46e5;
    margin: 20px 0;
  }

  .buttons {
    display: flex;
    gap: 12px;
  }

  button {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
  }

  .inc {
    background: #22c55e;
  }

  .reset {
    background: #ef4444;
  }
`;
document.head.appendChild(style);
