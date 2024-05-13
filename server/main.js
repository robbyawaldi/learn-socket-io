import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("the client is connected");
});

app.get("/ping", (req, res) => {
  console.log("ping");
  io.emit("ping", {
    message: "test",
  });
  res.json({
    message: "pong",
  });
});
const port = 3000;
httpServer.listen(port);
console.log(`running on port ${port}`);
