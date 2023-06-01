import { createChatTextEl } from "./elements";
let socket = io("/");

socket.on("connect", () => {
  console.log("Connected to Socket.io", socket);
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
