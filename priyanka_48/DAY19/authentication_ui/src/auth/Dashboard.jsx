import { logoutUser } from "./auth";

function Dashboard({ onLogout }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Dashboard</h1>
      <button onClick={() => { logoutUser(); onLogout(); }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
