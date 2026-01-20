import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const headingRef = useRef(null);
  const [showCard, setShowCard] = useState(true);
  const [submitted, setSubmitted] = useState(false); // new state for submit message

  // Focus management for SPA
  useEffect(() => {
    if (showCard) {
      headingRef.current.focus();
    }
  }, [showCard]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(true);  // show success message
  };

  return (
    <div className="page">
      {showCard && (
        <div className="card">

          {/* Heading */}
          <h1 tabIndex="-1" ref={headingRef} className="heading">
            Accessibility (A11y) Demo
          </h1>

          {/* Form */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="input"
              />
            </div>

            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="input"
              />
            </div>

            <button type="submit" className="button">
              Submit
            </button>
          </form>

          {/* Success message */}
          {submitted && (
            <p role="alert" className="alert">
              Submitted successfully!
            </p>
          )}

          {/* Close Button */}
          <button
            aria-label="Close demo"
            className="closeBtn"
            onClick={() => setShowCard(false)}
          >
            ❌
          </button>

        </div>
      )}
    </div>
  );
}

export default App;
