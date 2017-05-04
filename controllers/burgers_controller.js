var express = require('express'),
    route = express.Router(),
    burger = require('../models/burger');

route.get('/', function (req, res) {
    burger.all(function (data) {
        var hbsOb = {
            burgers: data
        };
        res.render('index', hbsOb);
    });
});

route.post("/", function (req, res) {
    burger.insert(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function () {
            res.redirect("/");
        });
});

route.put("/:id", function (req, res) {
    console.log('hi');
    var condition = "id = " + req.params.id;
    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function () {
            res.redirect("/");
        });
});

module.exports = route;