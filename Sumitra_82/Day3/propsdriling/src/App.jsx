import React from "react";

/* =========================
   MAIN APP COMPONENT
   ========================= */

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Component Patterns</h1>

      {/* Props Drilling Section */}
      <h2> Props Drilling Example</h2>
      <ParentPD user="Sumitra" />

      <hr />

      {/* Composition Section */}
      <h2> Composition Example</h2>
      <ParentComp>
        <GrandChildComp />
      </ParentComp>
    </div>
  );
}

/* =========================
   PROPS DRILLING EXAMPLE
   ========================= */

/*
  Data (user) is passed from:
  Parent → Child → GrandChild
  Even if Child doesn't need it,
  it still has to forward it.
*/

function ParentPD({ user }) {
  return <ChildPD user={user} />;
}

function ChildPD({ user }) {
  return <GrandChildPD user={user} />;
}

function GrandChildPD({ user }) {
  return <p> User from Props Drilling:  Hllw {user}</p>;
}

/* =========================
   COMPOSITION EXAMPLE
   ========================= */

/*
  Parent does NOT pass props manually.
  Components are composed using `children`.
  This avoids unnecessary prop passing.
*/

function ParentComp({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

function GrandChildComp() {
  return <p> User from Composition: Sumitra</p>;
}
