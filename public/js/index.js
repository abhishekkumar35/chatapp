import { createChatTextEl } from "./elements";
export let socket = io("/");
let username;
socket.on("connect", () => {
  console.log("Connected to Socket.io", socket.id);
});
socket.on("message", (data) => {
  createChatTextEl(data);
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
