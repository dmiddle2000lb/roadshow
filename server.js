var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ws = require('./ws')(io);

app.use('/', express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

server.listen(port);