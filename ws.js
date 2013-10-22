
var ws = function( io ){
  io.sockets.on('connection', function (socket) {

    socket.on('guess', function(data){
      console.log('ohai', data);
      io.sockets.emit('new guess', data);
    });

  });
};

module.exports = ws;