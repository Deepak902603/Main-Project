const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  setInterval(() => {
    socket.emit("notification", "Hello from server 🚀");
  }, 5000);
});

server.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
