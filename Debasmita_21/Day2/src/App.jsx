import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Counter */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Counter</h2>

        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <span className="text-lg font-semibold">{count}</span>

          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
      </div>

      {/* Users */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Users</h2>

        {users.map(user => (
          <p key={user.id} className="border-b py-1">
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
