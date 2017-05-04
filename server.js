var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express(),
    PORT = process.env.PORT || 7777;

app.use(methodOverride('_method'));

// DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Static directory
app.use(express.static("app/public"));

// ROUTES
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// LISTEN TO ME
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});