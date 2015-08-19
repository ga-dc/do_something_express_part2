var express = require("express")
var bodyParser = require("body-parser")
var path = require("path");
var app = express()

// 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Require the controllers.
var tasksController = require("./app/controllers/tasksController");
var listsController = require("./app/controllers/listsController");

// Use port 4000 to run application.
app.listen(4000, function(){
  console.log("app listening on port 4000")
});