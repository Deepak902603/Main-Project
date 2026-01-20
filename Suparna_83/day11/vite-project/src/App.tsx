import Greeting from "./Greeting";
import Counter from "./Counter";
import Button from "./Button";

function App() {
  return (
    <>
      <Greeting
        name="Suparna"
        age={22}
        status="Student"
      />
      <Counter />
      <Button label="Click Me" />
    </>
  );
}

export default App;
