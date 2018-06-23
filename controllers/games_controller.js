var db = require('../models');

exports.index = function(req, res) {
    // GET route for getting all of the products
    db.Game.findAll({})
        .then(function(dbProduct) {
            // console.log(dbProduct);
            res.render('games/games', {
                games: dbProduct
            });
        });
};

exports.createProduct = function(req, res) {
    // POST route for creating a product
    db.Game.create(req.body).then(function(dbGame){
        res.json(dbGame);
        // console.log(dbGame);
    });
};

exports.getProduct = function(req, res) {
    // GET route for getting a single product
    db.Game.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(dbGame) {
        console.log(dbGame);
        res.json(dbGame);
    });
};

exports.deleteProduct = function(req, res) {
    // DELETE route for deleting products
    db.Game.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbGame) {
        console.log(dbGame);
        res.json(dbGame);
    });
};

exports.updateProduct = function(req, res) {
    // PUT route for updating products
    db.Game.update(req.body,
    {
        where: {
            id: req.body.id
        }
    }).then(function(dbGame) {
        res.json(dbGame);
    });
};