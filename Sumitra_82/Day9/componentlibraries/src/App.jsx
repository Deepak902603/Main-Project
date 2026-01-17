
import { Menu } from "@headlessui/react";

export default function App() {
  return (
    <>
      {/* 🔥 FORCE RESET + CENTER (ONE FILE ONLY) */}
      <style>{`
        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
        }

        body {
          display: block !important;
        }
      `}</style>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f3f4f6",
        }}
      >
        <Menu as="div" style={{ position: "relative" }}>
          {/* BUTTON */}
          <Menu.Button
            style={{
              padding: "12px 32px",
              fontSize: "16px",
              borderRadius: "10px",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Open Menu
          </Menu.Button>

          {/* DROPDOWN */}
          <Menu.Items
            style={{
              position: "absolute",
              top: "120%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "180px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              padding: "6px 0",
            }}
          >
            {["Profile", "Settings", "Logout"].map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "none",
                      backgroundColor: active ? "#e5e7eb" : "white",
                      textAlign: "left",
                      cursor: "pointer",
                      color: item === "Logout" ? "#dc2626" : "#111827",
                    }}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}
