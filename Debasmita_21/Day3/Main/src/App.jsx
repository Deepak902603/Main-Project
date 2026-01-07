import Dashboard from "./Dashboard";
import Profile from "./Profile";
import UserName from "./UserName";

function App() {
  return (
    <Dashboard>
      <Profile>
        <UserName />
      </Profile>
    </Dashboard>
  );
}

export default App;
