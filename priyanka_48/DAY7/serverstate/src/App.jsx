import React from "react";
import { useQuery } from "@tanstack/react-query";

/* Fetch function (server state) */
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error fetching users</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Day 7 – React Query (Server State)</h1>

      {data.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
