import { useState, useEffect } from "react";
import "./App.css";


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState(null);

  // API Fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 w-80 text-center shadow-xl">
      <p className="text-lg font-semibold text-gray-600 mb-2">
        Welcome 👋
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Counter App
      </h2>

      <p className="text-4xl font-extrabold mb-6 text-indigo-600">
        {count}
      </p>

      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
        >
          +
        </button>

        <button
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          −
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
        >
          Reset
        </button>
      </div>

      {/* API DATA */}
      {apiData && (
        <div className="text-sm text-gray-600 border-t pt-4">
          <p className="font-semibold text-gray-700 mb-1">
            API Result
          </p>
          <p><span className="font-medium">ID:</span> {apiData.id}</p>
          <p><span className="font-medium">Title:</span> {apiData.title}</p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            {apiData.completed ? "✅ Completed" : "⏳ Pending"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;