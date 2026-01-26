import useFetch from "./hooks/useFetch";
import useAuth from "./hooks/useAuth";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Hooks Demo</h1>

      <button onClick={() => login({ name: "Ankita" })}>
        Login
      </button>
      <button onClick={logout}>Logout</button>

      <p>
        Status: {isAuthenticated ? `Logged in as ${user.name}` : "Logged out"}
      </p>

      <h2>Users</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default App;
