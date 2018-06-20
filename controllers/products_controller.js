var db = require('../models');

exports.index = function(req, res) {

    // GET route for getting all of the products
    db.Game.findAll({})
        .then(function(Games) {
            //console.log(Games);
            res.render('products/products', {
                games: Games
            });
        });

};

exports.createProduct = function(req, res) {

};
