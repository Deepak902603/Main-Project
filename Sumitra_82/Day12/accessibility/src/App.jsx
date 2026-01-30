
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const dialogRef = useRef(null);
  const openBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) dialogRef.current?.focus();
    else openBtnRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div style={styles.page}>
      <main style={styles.container} aria-labelledby="page-title">
        <h1 id="page-title">React Accessibility (A11y) ♿</h1>
        <p style={styles.subtitle}>SPA Friendly Accessible Patterns</p>

        <button
          ref={openBtnRef}
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          style={styles.primaryBtn}
        >
          Open Accessible Dialog
        </button>

        <section aria-labelledby="counter-title" style={styles.section}>
          <h2 id="counter-title">Accessible Counter</h2>

          <p aria-live="polite">
            Current count is <strong>{count}</strong>
          </p>

          <div style={styles.btnGroup}>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
          </div>
        </section>

        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            style={styles.overlay}
          >
            <div
              ref={dialogRef}
              tabIndex="-1"
              style={styles.dialog}
            >
              <h2 id="dialog-title">Accessible Dialog</h2>
              <p>ESC key se close ho jata hai.</p>

              <button onClick={() => setIsOpen(false)}>
                Close Dialog
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* =========================
   Styles
========================= */
const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
  },
  container: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.08)",
    padding: "24px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
  },
  subtitle: {
    opacity: 0.85,
    marginBottom: "20px",
  },
  section: {
    marginTop: "24px",
  },
  primaryBtn: {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  btnGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "8px",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    background: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "12px",
    width: "300px",
  },
};
