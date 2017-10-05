const Chat = require('./chat');

class ChatUI (socket) {
  constructor(socket) {
    this.chat = new Chat(socket);
    this.form = document.querySelector('form');
    this.msgList = document.querySelector('ul#msg-list');
    this.input = document.querySelector('input');
    this.submitHandler();
  },

  getInput() {
    return this.input.value;
  },

  renderMsg(message) {
    const newListMessage = document.createElement('li');
    newListMessage.textContent = msg;
    this.msgList.append(newListMessage);
  },

  submitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.renderMsg(this.getInput());
      this.input.value = '';
    })
  }
}

module.export = ChatUI;
