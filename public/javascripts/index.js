document.addEventListener('DOMContentLoaded', () => {
  const socket = require('socket.io-client')();
  const ChatUI = require('./chatUI');

  const GUI = new ChatUI(socket);
  window.g = GUI;
});
