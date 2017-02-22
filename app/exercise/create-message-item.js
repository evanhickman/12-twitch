export default function createMessageItem(messageItem) {
  const newEl = document.createElement('li');
  newEl.innerHTML = `<span class="message-item__username">${messageItem.username}</span> ${messageItem.message}`;

  return newEl;
}
