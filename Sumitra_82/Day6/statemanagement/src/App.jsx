import React from "react";
import { useQuery } from "@tanstack/react-query";

// API fetch function (server state)
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],   // cache key
    queryFn: fetchUsers,   // API function
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading data</h2>;

  return (
    <div>
      <h1>Server State Example</h1>

      {data.map((user) => (
        <div key={user.id}>
          <p>
            <b>{user.name}</b> - {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
