document.addEventListener('DOMContentLoaded', () => {
  const io = require('socket.io-client')();
  const ChatUI = require('./chatUI');
  const chat = new ChatUI(socket);

  const GUI = new ChatUI(socket);
  window.g = GUI;
});
