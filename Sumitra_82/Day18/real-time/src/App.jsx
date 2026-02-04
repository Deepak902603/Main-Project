import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // backend server

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("notification", (msg) => {
      setNotifications((prev) => [msg, ...prev]);
    });

    return () => socket.off("notification");
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>🔔 Real-time Notifications</h2>

        {notifications.length === 0 ? (
          <p>No notifications yet</p>
        ) : (
          notifications.map((note, i) => (
            <div key={i} style={styles.notification}>
              {note}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    width: "350px",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  notification: {
    marginTop: "10px",
    padding: "10px",
    background: "#e3f2fd",
    borderRadius: "6px",
  },
};
