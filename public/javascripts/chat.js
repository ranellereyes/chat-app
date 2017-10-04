function Chat (socket) {
  this.socket = socket;
}

Chat.prototype.sendMessage = function(message) {
  console.log(message);
  this.socket.emit('message', { message });
};

module.exports = Chat;
