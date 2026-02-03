import { useEffect, useState } from "react";
import { useSocket } from "../context/SocketContext.jsx";

const Notification = () => {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("notification", (msg) => {
      setMessages((prev) => [...prev, msg]);

      // Remove after 5 seconds
      setTimeout(() => {
        setMessages((prev) => prev.slice(1));
      }, 5000);
    });

    return () => socket.off("notification");
  }, [socket]);

  return (
    <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
      {messages.map((msg, idx) => (
        <div
          key={idx}
          style={{
            background: "#333",
            color: "#fff",
            padding: "10px 20px",
            marginBottom: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            animation: "fadeIn 0.5s",
          }}
        >
          {msg}
        </div>
      ))}
    </div>
  );
};

export default Notification;
