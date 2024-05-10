import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("the client is connected");
  app.get("/ping", (req, res) => {
    console.log("ping");
    io.emit("ping", "Ping from server!");
    res.json({
      message: "pong",
    });
  });
});

const port = 3000;
httpServer.listen(port);
console.log(`running on port ${port}`);
