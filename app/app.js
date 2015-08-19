var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.set("view engine", "hbs")
app.get("/", function(request, response){
  response.sendFile(__dirname + "/views/index.html");
});

app.get("")

var listsController = require('./controllers/listsController');
listsController.setup(app);

var tasksController = require('./controllers/tasksController');
tasksController.setup(app);

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
