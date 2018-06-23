var db = require('../models');

exports.index = function(req, res) {
    // GET route for getting all of the products
    db.Game.findAll({})
        .then(function(dbProduct) {
            // console.log(dbProduct);
            res.render('index', {
                games: dbProduct,
                currentUser: req.user
            });
        });
};