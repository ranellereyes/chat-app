const Chat = require('./chat');

function ChatUI (socket) {
  this.chat = new Chat(socket);
  this.room = document.querySelector('h3#room');
  this.msgList = document.querySelector('ul#msg-list');
  this.roomList = document.querySelector('ul#room-list');
  this.form = document.querySelector('form');
  this.input = document.querySelector('input');

  window.chat = this.chat;

  this.form.addEventListener("submit", e => {
    e.preventDefault();
    this.renderMessage(this.retrieveInput());
    this.emitMessage(e.value);
  });
}

ChatUI.prototype.retrieveInput = function() {
  return this.input.value;
};

ChatUI.prototype.emitMessage = function() {
  this.chat.sendMessage(this.retrieveInput());
};

ChatUI.prototype.renderMessage = function(message) {
  let newMsg = document.createElement('li');
  let textNode = document.createTextNode(message);
  newMsg.appendChild(textNode);
  this.msgList.appendChild(newMsg);
};



module.exports = ChatUI;
