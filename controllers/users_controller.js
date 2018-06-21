var db = require('../models');

exports.index = function(req, res) {
    res.render('users/login');
};

// Register a user
exports.signUp = function(req, res) {
    db.User.create(req.body).then(function(dbUser){
        res.json(dbUser);
        console.log(dbUser);
      });
};