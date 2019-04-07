const game = {
    state: {
        players: []
    },
    io: {
        connection: function (socket) {
            console.log('New connection' + socket.handshake.address);
            socket.emit('game_state_refresh', game.state);
        }
    }
}

module.exports = game;
