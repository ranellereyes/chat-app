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

module.export = Chat;
