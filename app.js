const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3300;

app.use(express.static("public/bundle"));
const chat = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname, "public/index.html");
});
app.get("/users", (req, res) => {
  res.send(chat);
});

io.on("connection", (socket) => {
  console.log(`new user ${socket.id} is connected`);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconnected`);
  });
});

server.listen(PORT, () => {
  console.log("Listening to PORT : ", PORT);
});
