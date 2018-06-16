// Functionality - Logic flow
// =======================================================
var db = require("../models");

module.exports = {
    read: function(req, res){
        db.Product.findAll({})
            .then(function(dbProduct) {
                res.json(dbProduct);
            });
    },
    create: function(req, res){
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        })
            .then(function(dbBurger) {
                res.json(dbBurger);
            });
    }
}