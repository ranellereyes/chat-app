const io = require('socket.io');

const chatServer = {
  listen(server) {
    const ioServer = io(server);

    ioServer.on('connection', () => {
      console.log("You are connected!");
    });
  }
};

module.exports = chatServer;
