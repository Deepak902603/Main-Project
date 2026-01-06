import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
    <div className="bg-white rounded-xl p-8 w-80 text-center shadow-md">
      <p className="text-lg font-semibold text-gray-700 mb-4">
       Welcome
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Counter App</h2>

      <p className="text-3xl font-bold mb-6 text-indigo-600">{count}</p>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Decrement
        </button>
      </div>

      {/* API DATA */}
      {apiData && (
        <div className="text-sm text-gray-600 border-t pt-4">
          <p className="font-semibold text-gray-700">API Result</p>
          <p>ID: {apiData.id}</p>
          <p>Title: {apiData.title}</p>
          <p>Status: {apiData.completed ? "Completed" : "Pending"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
