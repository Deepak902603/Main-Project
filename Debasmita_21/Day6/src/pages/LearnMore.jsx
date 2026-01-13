import "./learn.css";

const LearnMore = () => {
  return (
    <div className="learn-container">
      <h1>📘 React Project Overview</h1>

      <section>
        <h2>📁 Folder Structure</h2>
        <pre>
{`src/
 ├── assets/
 ├── components/
 │   ├── Header.jsx
 │   ├── Footer.jsx
 │   └── Navbar.jsx
 ├── context/
 │   ├── AuthContext.jsx
 │   └── ThemeContext.jsx
 ├── pages/
 │   ├── Home.jsx
 │   ├── Login.jsx
 │   ├── Task.jsx
 │   └── LearnMore.jsx
 ├── App.jsx
 └── main.jsx`}
        </pre>
      </section>

      <section>
        <h2>🔄 React App Flow</h2>
        <ol>
          <li><b>main.jsx</b> renders the App</li>
          <li><b>App.jsx</b> sets up routing</li>
          <li><b>Header/Footer</b> stay persistent</li>
          <li><b>Routes</b> switch pages dynamically</li>
          <li><b>Context API</b> manages global state</li>
        </ol>
      </section>
    </div>
  );
};

export default LearnMore;
