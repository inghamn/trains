export const client = {
    game_state_refresh: function (state) {
        let    i = 0,
            html = '<ul>';
        
        console.log(state.players);
        for (i in state.players) {
            html += '<li>' + state.players[i] + '</li>';
        }
        html += '</ul>';
        document.getElementById('players').innerHTML = html;
    }
};
