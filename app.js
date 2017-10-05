const express = require('express');
const app = express();
const http = require('http').Server(app);
const server = require('./lib/chatServer');

console.log(http)

server.listen(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(index.html);
});

app.listen(8000, () => {
  console.log(`App is currently listening on port 8000!`);
});
