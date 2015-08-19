var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions
app.set("view engine", "hbs")

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

// var list_routes = require('./app/models/list');
// list_routes.setup(app);

// var task_routes = require('./app/models/task');
// task_routes.setup(app);

// var listsController = require('./app/controllers/listsController');
// listsController.setup(app);

var tasksController = require('./app/controllers/tasksController');
tasksController.setup(app);

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
