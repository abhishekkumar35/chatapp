const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3300;

app.use(express.static("public/bundle"));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "public/index.html");
});
const chat = [];

io.on("connection", (socket) => {
  console.log(socket);
});

server.listen(PORT, () => {
  console.log("Listening to PORT : ", PORT);
});
