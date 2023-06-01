export const createChatTextEl = () => {
  const chatBodyEl = document.getElementById("chat-body");
  const textInputEl = document.getElementById("chat-text-input");
  const chatTextEl = document.createElement("span");
  chatTextEl.classList.add("chat-text");
  const inputText = textInputEl.value;
  if (inputText !== "") {
    chatTextEl.textContent = inputText;
    chatBodyEl.appendChild(chatTextEl);
    console.log(textInputEl.value);
    textInputEl.value = "";
    console.log("textInputEl content", textInputEl.value);
  }
};
