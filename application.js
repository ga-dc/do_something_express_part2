var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

var controller = require("./app/controllers/tasks");

app.get("/tasks", controller.index);

app.post("/tasks", controller.create);

app.get("/tasks/:id", controller.show);

app.delete("/tasks/:id", controller.delete);
