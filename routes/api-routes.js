const db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {

        db.Burger.findAll({}).then(function(data) {
            //console.log(data);
            if(data.length != 0) {
                res.render("index", {burger: data});
            } else {
                res.render("index");
            }
          });
    });
  
    //POST route for saving a new burger
    app.post("/api/burgers", function(req, res) {
        console.log(req.body);
        db.Burger.create({
            name: req.body.name
        }).then(function(data) {
            res.json(data);
        });
    });

    //PUT route for updating a burger
    app.put("/api/burgers", function(req, res) {
        console.log(req.body.id);
        db.Burger.update({
            devoured: true
        },{
            where: {
                id: req.body.id
                }
        }).then(function(data) {
            res.json(data);
        });
    });

  };