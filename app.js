"use strict";
const express = require('express'),
      app     = express(),
      http    = require('http').Server(app),
      io      = require('socket.io')(http),
      game    = require('./game');

app.use('/', express.static('public'));
http.listen(3000, function () {
    console.log('Listening on :3000');
});
io.on('connection', game.io.connection);
