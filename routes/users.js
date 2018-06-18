var express = require('express');
var router  = express.Router();

var users_controller = require('../controllers/users_controller');

router.get('/login', users_controller.index);
// localhost:8000/users/login

module.exports = router;