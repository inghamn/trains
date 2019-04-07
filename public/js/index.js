import { client } from './client.js';
const socket = io();
socket.on('game_state_refresh', client.game_state_refresh);
