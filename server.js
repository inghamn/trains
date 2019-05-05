"use strict";
const express   = require('express'),
      app       = express(),
      http      = require('http').Server(app),
      WebSocket = require('ws'),
      wss       = new WebSocket.Server({server: http.listen(3000, function () { console.log('Listening on :3000')})}),
      game      = require('./game'),
      heartbeat = setInterval(function () {
                    wss.clients.forEach(function (socket) {
                        if (!socket.alive) { return socket.terminate(); }
                        console.log('sending ping');
                        socket.alive = false;
                        socket.ping('ping');
                    });
                  }, 5000);

app.use('/', express.static('public'));

wss.broadcast = function (message) {
    wss.clients.forEach(function (client) {
        if (client.readState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}

wss.on('connection', function (socket, request) {
    console.log('New connection' + request.connection.remoteAddress);
    socket.alive = true;
    socket.on('pong', function () {
        console.log('pong received');
        this.alive = true;
    });
    
    wss.broadcast(game.state);
//     server.emit('game_state_refresh', game.state);
//     
//     socket.on('login', function (username) {
//         game.io.login(server, username, socket);
//         console.log('login' + username);
//     });
});
