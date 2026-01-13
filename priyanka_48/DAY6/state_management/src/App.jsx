import React, { useContext } from "react";
import { UserContext } from "./UserContext";

/* Child Component */
function Navbar() {
  const user = useContext(UserContext);
  return <h2>Welcome {user}</h2>;
}

/* Another Child Component */
function Profile() {
  const user = useContext(UserContext);
  return <p>User Profile: {user}</p>;
}

function App() {
  const username = "Priyanka"; // shared state

  return (
    <UserContext.Provider value={username}>
      <Navbar />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
