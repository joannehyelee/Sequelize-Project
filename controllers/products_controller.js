// var db = require('../models');

exports.index = function(req, res) {
    res.render('products/products');

    // GET route for getting all of the products
    // db.Product.findAll({})
    //     .then(function(dbProduct) {
    //         console.log(dbProduct);
    //         res.render('products/products', {

    //         });
    //     });

};

exports.createProduct = function(req, res) {

};
