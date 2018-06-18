// A SET OF ROUTES FOR DISPLAYING & SAVING DATA TO THE DB
// =======================================================

var express = require('express');
var router  = express.Router();

var products_controller = require('../controllers/products_controller');

router.get('/', products_controller.index);
// localhost:8000/products

module.exports = router;