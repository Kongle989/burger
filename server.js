var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express(),
    PORT = process.env.PORT || 7777,
    route = require('./controllers/burgers_controller.js');
app.use("/", route);

app.use(methodOverride('_method'));

// DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// LISTEN TO ME
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});