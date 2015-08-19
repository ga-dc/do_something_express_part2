var express = require("express");
var app = express();

app.set("view engine", "hbs") //handlebars

var bodyParser = require("body-parser")

app.get("/"), function(request, response){
  response.SendFile(__dirname + "/app/views/index.html");
};

app.use(bodyParser.json()) //handles json post requests.
app.use(bodyParser.urlencoded({ extended: false })) //handles form submissions.
var path = require("path");

app.get('/index', function(req, res) {
  response.sendFile(__dirname + "/app/views/index.html");
});

app.get("/routes", function(request, response){
  response.json(app._router.stack);
});

var tasksController = require("./app/controllers/tasksController");

app.get("/tasks", tasksController.index);
app.post("/tasks", tasksController.create);
app.get("/tasks/:id", tasksController.show);
app.delete("/tasks/:id", tasksController.delete);

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
