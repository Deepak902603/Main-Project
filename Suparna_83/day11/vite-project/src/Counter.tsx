import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Counter;
