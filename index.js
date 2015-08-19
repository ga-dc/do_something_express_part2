-var express = require("express")
-var app = express()
-var bodyParser = require("body-parser")
-
-app.set("view engine", "hbs")
-
-app.use(bodyParser.json())
-app.use(bodyParser.urlencoded({ extended: true }))
-
-var task_routes = require("./app/controllers/task");
-task_routes.taskSetup(app)
-
-app.listen(3000, function(){
-  console.log("Listening on port 3000");
-});
-
-app.get("/", function(request, response){
-  response.sendFile(__dirname + "/app/views/index.html");
-});