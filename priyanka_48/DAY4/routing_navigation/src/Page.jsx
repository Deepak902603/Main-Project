import { Routes, Route, Link } from "react-router-dom";
import "./index.css"; 

/* ---- Components ---- */

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page</p>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

/* ---- Main Page Component ---- */
function Page() {
  return (
    <div className="container">
      <h1>Routing & Navigation</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Page;
