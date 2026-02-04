import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard Layout</h2>

      <nav>
        <Link to="">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="orders">Orders</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
