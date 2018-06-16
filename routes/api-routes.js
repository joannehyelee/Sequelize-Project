// A SET OF ROUTES FOR DISPLAYING & SAVING DATA TO THE DB
// =======================================================

// Require our Burger model
var db = require("../models");
// Require Burger controller
var products_controller = require("../controllers/products-controller");

module.exports = function(app) {

    // GET route for getting all of the products
    app.get("/api/products/", products_controller.read);

    // POST route for submitting a new burger
    app.post("/api/products", products_controller.create);

};