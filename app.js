var express = require('express')
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

var tasks = [
  {id: 1, body: "task 1", completed: true},
  {id: 2, body: "task 2", completed: false},
  {id: 3, body: "task 3", completed: true},
  {id: 4, body: "task 4", completed: false},
  {id: 5, body: "task 5", completed: true}
]

var task_routes = require('tasksController')
task_routes.setup(app);

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
