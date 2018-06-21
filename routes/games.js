var express = require('express');
var router  = express.Router();

var games_controller = require('../controllers/games_controller');

router.get('/', games_controller.index);
// localhost:8000/games

router.post('/new', games_controller.createProduct);
// localhost:8000/games/new

module.exports = router;