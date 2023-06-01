import { createChatTextEl } from "./elements";
export let socket = io("/");
let username;
socket.on("connect", () => {
  console.log("Connected to Socket.io", socket.id);
  username = prompt("Set a new username", "");
  const data = { username };

  if (username) {
    socket.emit("new-user", data);
  }
});
function checkUsername(username) {
  const data = { username };
  socket.emit("new-user", data);
}
socket.on("user-exist", (data) => {
  if (data.message == "Username already Exist") {
    alert(data.message);
    console.log(1);
    username = prompt(`Set a new username`, "");
    console.log(2);
    const data = { username };
    if (username) {
      socket.emit("new-user", data);
    }
  }
});
const buttonEl = document.getElementById("chat-text-send-btn");
buttonEl.addEventListener("click", () => {
  createChatTextEl();
});

const inputEl = document.getElementById("chat-text-input");
inputEl.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    createChatTextEl();
  }
});
