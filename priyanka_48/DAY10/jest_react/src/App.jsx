import Hello from "./Hello";
import Button from "./Button";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>DAY 10 – React Testing</h2>

       <p style={{ color: "green", fontWeight: "bold" }}>
        React Testing implemented (see test files)
      </p>

      <Hello />
      <Button />
    </div>
  );
}

export default App;
