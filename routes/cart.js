var express = require('express');
var router  = express.Router();

var cart_controller = require('../controllers/cart_controller');

router.get('/', cart_controller.index);
// localhost:8000/cart

module.exports = router;