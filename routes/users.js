var express = require('express');
var router  = express.Router();

var users_controller = require('../controllers/users_controller');

router.get('/login', users_controller.index);
// localhost:8000/users/login

router.post('/signup', users_controller.signUp);

module.exports = router;