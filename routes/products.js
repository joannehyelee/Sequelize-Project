var express = require('express');
var router  = express.Router();

var products_controller = require('../controllers/products_controller');

router.get('/', products_controller.index);
// localhost:8000/products

router.post('/new', products_controller.createProduct);
// localhost:8000/products/new

module.exports = router;