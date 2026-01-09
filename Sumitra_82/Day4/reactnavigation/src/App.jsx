import { Routes, Route, Link } from "react-router-dom";

/* ---- All components in ONE FILE ---- */

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Home page</p>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

/* ---- Main Page Component ---- */
function Page() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Routing & Navigation</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Page;
