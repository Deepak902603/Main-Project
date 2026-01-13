import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Home Page</h1>

      {user ? (
        <>
          <h2>Welcome, {user}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button onClick={() => setUser("Suparna")}>Login</button>
      )}
    </div>
  );
}

export default Home;
