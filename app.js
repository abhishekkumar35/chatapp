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
  socket.on("new-user", (data) => {
    const usernameExistBool = chat.some((user) =>
      Object.keys(user).some((key) => key == data.username)
    );
    if (usernameExistBool) {
      socket.emit("user-exist", { message: "Username already Exist" });
    } else {
      chat.push({ [data.username]: { socketId: socket.id, messages: [] } });
      console.log(chat);
    }
  });
  console.log(chat);
  socket.on("message", (data) => {
    console.log(data);
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconnected`);
  });
});

server.listen(PORT, () => {
  console.log("Listening to PORT : ", PORT);
});
