var db = require('../models');

exports.index = function(req, res) {
    // res.render('games/games');

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

    console.log("!!!!!!!", req.file);
    console.log("!!!!!!!", req.files);

    db.Game.create(req.body).then(function(dbGame){
        res.json(dbGame);
        // console.log(dbGame);
    });
};