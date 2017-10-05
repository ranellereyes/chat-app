document.addEventListener('DOMContentLoaded', () => {
  const io = require('socket.io-client')();
  const ChatUI = require('./chatUI');
  const chat = new ChatUI(socket);

  console.log(io);
});
