var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  res.json({ jsonrpc: "2.0", method: "Player.GetActivePlayers", id: 1 });
  // res.send('respond with a resource');
});

module.exports = router;
