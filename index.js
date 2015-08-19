var express = require("express");
var app = express();
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
var path = require("path");

app.use("/app", express.static(path.join(__dirname + "/app")));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

var tasksController = require("./app/controllers/tasksController");

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

app.get("/routes", function(request, response){
  response.json(app._router.stack);
});

app.get("/tasks", tasksController.index);
app.post("/tasks", tasksController.create);
app.get("/tasks/:id", tasksController.show);
app.delete("/tasks/:id", tasksController.delete);

app.listen(3000, function(){
  console.log("Listening on port 3000");
});