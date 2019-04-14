"use strict";
const express = require('express'),
      app     = express(),
      http    = require('http').Server(app),
      server  = require('socket.io')(http),
      game    = require('./game');

app.use('/', express.static('public'));
http.listen(3000, function () {
    console.log('Listening on :3000');
});
server.on('connection', function (socket) {
    console.log('New connection' + socket.handshake.address);
    server.emit('game_state_refresh', game.state);
    
    socket.on('login', function (username) {
        game.io.login(server, username, socket);
        console.log('login' + username);
    });
});
