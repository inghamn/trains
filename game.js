const game = {
    state: {
        players: []
    },
    io: {
        login: function (server, username, client) {
            if (!game.state.players.includes(username)) {
                game.state.players.push(username);
            }
            server.emit('game_state_refresh', game.state);
            console.log(game.state);
        }
    }
}

module.exports = game;
