var express = require("express")
var jade = require("jade")
var bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.json()) // Handles JSON post requests
app.use(bodyParser.urlencoded({extended:true})) // Handles form submissions

app.set("views", __dirname + "/app/views");

app.set('view engine', 'jade')

app.get("/", function(req, res) {
	res.send("Welcome to Do Something!")
})

app.get("/tasks", function(req, res) {
	res.json(tasks)
})

app.get("/tasks/:id", function (req,res) {
  res.render("index", {id: req.params.id, body: tasks[req.params.id].body, completed: tasks[req.params.id].completed})
})

tasks = [{id: 0, body: "Take out the trash.", completed: false},
				 {id: 1, body: "Walk the invisible dog.", completed: true},
				 {id: 2, body: "Finish GA homework.", completed: false},
				 {id: 3, body: "Read 'The Portable Nietzsche.'", completed: true},
				 {id: 4, body: "Fix iPad.", completed: false}]


app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})