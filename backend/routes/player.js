
import axios from 'axios'

/* GET users listing. */
let Player = ["GetActivePlayers", "PlayPause"];


let pp = {"jsonrpc": "2.0", "method": "Player.PlayPause", "params": { "playerid": 0 }, "id": 1}

let meta = axios.get('https://api.github.com/meta').then(response => response.data)

console.log(metas)

res.render("index", { title: "TV", count: 3, background: "", player: { ...pp, Player, });});

module.exports = router;
