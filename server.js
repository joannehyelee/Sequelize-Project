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

// Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true }));
app.use(passport.initialize());
app.use(passport.session());

// Require models for syncing
var db = require("./models");

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