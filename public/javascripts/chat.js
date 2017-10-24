// function Chat (socket) {
//   this.socket = socket;
// }
//
// Chat.prototype.sendMessage = function(message) {
//   this.socket.emit('message', { message });
// };

class Chat(socket) {
  constructor(socket) {
    this.socket = socket
  },

  sendMessage(message) {
    this.socket.emit('message', { message });
  }
}

Chat.prototype.sendMessage = function(message) {
  console.log(message);
  this.socket.emit('message', { message });
};

module.exports = Chat;
