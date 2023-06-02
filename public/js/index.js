import { createChatTextEl } from "./elements";
export let socket = io("/");
let username;
socket.on("connect", () => {
  console.log("Connected to Socket.io", socket.id);
  document.getElementById("your-id").textContent = `Your Id : ${socket.id}`;
});
socket.on("message", (data) => {
  createChatTextEl(data);
});
const inputEl = document.getElementById("chat-text-input");
const buttonEl = document.getElementById("chat-text-send-btn");
buttonEl.addEventListener("click", () => {
  if (inputEl.value != "") {
    createChatTextEl();
  }
});

inputEl.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (inputEl.value != "") {
      createChatTextEl();
    }
  }
});
