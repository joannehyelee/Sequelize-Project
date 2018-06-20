var db = require('../models');

exports.index = function(req, res) {

    // get all games
    db.Game.findAll({})
        .then(function (Games) {
            //console.log(Games);
            res.render('index', {
                games: Games
            });
        });
};