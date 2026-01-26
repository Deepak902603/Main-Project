import { useState } from "react";

export default function Button() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setMessage("Button Clicked!")}>
        Click Me
      </button>
      <p>{message}</p>
    </div>
  );
}
