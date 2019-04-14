const game = {
    state: {
        players: []
    },
    io: {
        login: function (server, username, client) {
            game.state.players[username] = client;
            server.emit('game_state_refresh', game.state);
            console.log(game.state);
        }
    }
}

module.exports = game;
