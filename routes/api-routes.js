var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
    res.render("index");
    });
  
    //POST route for saving a new todo
    app.post("/api/burgers", function(req, res) {
        console.log(req.body);
      db.Burger.create({
        name: req.body.name
      }).then(function(data) {
        res.json(data);
      });
    });
  };