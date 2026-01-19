import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg">
      <h1 className="text-xl font-bold" data-testid="count-value">
        Count: {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
