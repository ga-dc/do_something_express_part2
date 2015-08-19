var express = require('express'),
  app = exports.app = express();

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var listsController = require("./app/controllers/listsController.js");
var tasksController = require("./app/controllers/tasksController.js");

app.get("/", function(request, response){
response.sendFile(__dirname + "/app/views/index.html");
});

app.get("/tasks", tasksController.index);
app.post("/tasks", tasksController.create);
app.get("/tasks/:id", tasksController.show);
app.delete("/tasks/:id", tasksController.delete);

app.get("/lists", listsController.index);
app.post("/lists", listsController.create);
app.get("/lists/:id", listsController.show);
app.delete("/lists/:id", listsController.delete);

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
