import { socket } from "./index.js";

export const createChatTextEl = (data = "") => {
  const chatBodyEl = document.getElementById("chat-body");
  const textInputEl = document.getElementById("chat-text-input");
  const chatTextEl = document.createElement("span");
  chatTextEl.classList.add("chat-text");

  const inputText = textInputEl.value == "" ? data : textInputEl.value;

  if (inputText !== "") {
    chatTextEl.textContent = inputText;
    chatBodyEl.appendChild(chatTextEl);
    console.log(chatTextEl.textContent);
    if (textInputEl.value != "") {
      socket.emit("message", chatTextEl.textContent);
    }
    textInputEl.value = "";
  }
};
