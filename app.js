var express = require('express'),
  app = exports.app = express();

var list = require("./app/models/list.js");
var task = require("./app/models/task.js");
var listsController = require("./app/controllers/listsController.js");
var tasksController = require("./app/controllers/tasksController.js");

  app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
  });

  list.sayHello()
  task.sayHello()
  listsController.sayHello()
  tasksController.sayHello()

  app.listen(4000, function(){
    console.log("app listening on port 4000")
  })
