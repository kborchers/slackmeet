var port = process.env.PORT || 1337
var server = require('http').createServer();
var app = server.listen(port);
console.log("listening on port "+port);
var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
  socket.on('message', function(message) {
    socket.broadcast.emit('message', message);
  });
});