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
	id = req.params.id
  res.render("index", {id: id, body: tasks[id].body, completed: tasks[id].completed})
})

app.post("/tasks", function(req, res){
	// I don't understand how this works, at all
	tasks.push(req.body)
	res.json(req.body)
})

tasks = [{id: 0, body: "Take out the trash.", completed: false},
				 {id: 1, body: "Walk the invisible dog.", completed: true},
				 {id: 2, body: "Finish GA homework.", completed: false},
				 {id: 3, body: "Read 'The Portable Nietzsche.'", completed: true},
				 {id: 4, body: "Fix iPad.", completed: false}]


app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})