// ***************************************************
// INITIAL STARTING POINT FOR THE NODE/EXPRESS SERVER
// ***************************************************

// DEPENDENCIES
// ===================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var session = require("express-session");

// EXPRESS CONFIGURATION
// ===================================================
var app = express();
var PORT = process.env.PORT || 8000;

// Set handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Middleware to handle data parsing
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require models for syncing
var db = require("./models");

passport.use(new LocalStrategy(
  function (username, password, done) {
    db.User.findOne({ where: { username: username } }).then(function (user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  db.User.findById(id).then(function (user) {
    done( null, user);
  });
});

app.post('/users/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })
);

app.get('/users/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// ROUTER
// ===================================================
require("./routes")(app);

// SYNC SEQUELIZE MODELS & START EXPRESS APP
// ===================================================
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("APP LISTENING ON PORT " + PORT);
    });
});

module.exports = app;