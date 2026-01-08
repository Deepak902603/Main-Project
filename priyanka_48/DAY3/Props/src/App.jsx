import React from "react";

/* ===========================
    App Root
=========================== */
function App() {
  return (
    <div style={{ margin: "30px", fontFamily: "Verdana" }}>
      <h1>React Day 3</h1>
      <p>Understanding Props Drilling and Component Composition</p>

      {/* -------- Props Drilling Section -------- */}
      <section>
        <h2>Props Drilling Example</h2>
        <DrillingDemo />
      </section>

      <hr />

      {/* -------- Composition Section -------- */}
      <section>
        <h2>Component Composition Example</h2>
        <CompositionDemo />
      </section>
    </div>
  );
}

/* ===========================
  PROPS DRILLING
  - Parent → Child → GrandChild   
=========================== */
function DrillingDemo() {
  const studentName = "Priyanka";

  // Parent receives the prop
  return <PDParent student={studentName} />;
}

// Parent component: receives prop, passes to Child
function PDParent({ student }) {
  return <PDChild student={student} />;
}

// Child component: receive the prop and just passes to grandchild
function PDChild({ student }) {
  return <PDGrandChild student={student} />;
}

// GrandChild component: actually uses the prop
function PDGrandChild({ student }) {
  return (
    <div style={{ padding: "10px", backgroundColor: "#ffecec" }}>
      <h3>Student Info (Props Drilling)</h3>
      <p>Name: {student}</p>
    </div>
  );
}

/* ===========================
   COMPOSITION
 - Parent renders children directly
=========================== */
//Root component,Creates the structure: Container (Parent) → Message (Child)
function CompositionDemo() {
  return (
    <Container>
      <Message name="Priyanka" />
    </Container>
  );
}

// Parent component(Container):It does NOT receive the `name` prop,It just wraps its children and provides layout
function Container({ children }) {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#e8f5e9",
        borderRadius: "6px",
      }}
    >
      {children}
    </div>
  );
}

// Child component: message is the chind,it receive the prop 'name' directly
function Message({ name }) {
  return <p>Welcome, {name}! (Composition)</p>;
}

export default App;
