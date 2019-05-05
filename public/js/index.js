import { client } from './client.js';
const socket      = new WebSocket('ws://localhost:3000'),
      heartbeat   = function () {
                        clearTimeout(this.pingTimeout);
                        this.pingTimeout = setTimeout(function () { this.terminate; }, 20000);
                    };
console.log(socket);
socket.onopen    = heartbeat;
socket.onmessage = function (message) { console.log(message); }
socket.onclose   = function () { clearTimeout(this.pingTimeout); };

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    socket.emit('login', document.getElementById('username').value);
}, false);
