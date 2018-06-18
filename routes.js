module.exports = function(app){

    var products = require('./routes/products');

    app.use('/', products);

}