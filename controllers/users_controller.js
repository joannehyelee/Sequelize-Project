// var db = require('../models');

exports.index = function(req, res) {
    res.render('users/login');
};

// Register a user
exports.signUp = function(req, res) {
    db.User.findAll({
        
    })
};