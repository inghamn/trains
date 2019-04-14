import { client } from './client.js';
const socket = io();
socket.on('game_state_refresh', function (state) {
    console.log(state);
});

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    socket.emit('login', document.getElementById('username').value);
}, false);
