
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

/* -------------------------------
   Create Query Client
-------------------------------- */
const queryClient = new QueryClient();

/* -------------------------------
   API function (Server Call)
-------------------------------- */
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

/* -------------------------------
   Component using Server State
-------------------------------- */
function Users() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <h3>Loading users...</h3>;
  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------
   Main App (Single File)
-------------------------------- */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px" }}>
        <h1>React Server State Example</h1>
        <Users />
      </div>
    </QueryClientProvider>
  );
}
