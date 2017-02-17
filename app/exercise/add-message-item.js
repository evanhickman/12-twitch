import createMessageItem from './create-message-item';

export default function addMessageItem(parent, message) {
  const li = createMessageItem(message);
  parent.appendChild(li);
}
