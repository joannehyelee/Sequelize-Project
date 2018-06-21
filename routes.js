module.exports = function(app){

    var application = require('./routes/application');
    var games = require('./routes/games');
    var users = require('./routes/users');
    var cart = require('./routes/cart');

    app.use('/', application);
    app.use('/games', games);
    app.use('/users', users);
    app.use('/cart', cart);

}