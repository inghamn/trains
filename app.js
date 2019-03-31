"use strict";
const express = require('express'),
      app     = express(),
      http    = require('http').Server(app),
      io      = require('socket.io')(http);

app.use('/', express.static('public'));
http.listen(3000, function () {
    console.log('Listening on :3000');
});
io.on('connection', function (socket) {
    console.log('New connection');
});
