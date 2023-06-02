import { socket } from "./index.js";

export const createChatTextEl = (data = {}) => {
  const chatBodyEl = document.getElementById("chat-body");
  const textInputEl = document.getElementById("chat-text-input");
  const chatTextEl = document.createElement("span");
  chatTextEl.classList.add("chat-text");

  const inputText =
    textInputEl.value == ""
      ? `${data.id} : ${data.message} `
      : `${textInputEl.value}`;

  if (inputText !== "") {
    chatTextEl.textContent = inputText;
    if (textInputEl.value == "") {
      chatTextEl.style.color = "green";
    }
    if (textInputEl.value != "") {
      chatTextEl.style.textAlign = "end";
      chatTextEl.style.color = "black";
      chatTextEl.style.fontWeight = "bold";
      chatTextEl.style.fontSize = "24px";

      chatTextEl.style.paddingRight = "20px";
    }
    chatBodyEl.appendChild(chatTextEl);
    console.log(chatTextEl.textContent);
    if (textInputEl.value != "") {
      socket.emit("message", {
        id: socket.id,
        message: chatTextEl.textContent,
      });
    }
    textInputEl.value = "";
  }
};
