module.exports = function(app){

    var application = require('./routes/application');
    var products = require('./routes/products');
    var users = require('./routes/users');
    var cart = require('./routes/cart');

    app.use('/', application);
    app.use('/products', products);
    app.use('/users', users);
    app.use('/cart', cart);

}