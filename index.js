var express = require("express")
var jade = require("jade")
var app = express()

app.set('view engine', 'jade')

app.get("/", function(req, res) {
	res.render("index")
})

tasks = [{id: 0, body: "Take out the trash.", completed: false},
				 {id: 1, body: "Walk the invisible dog.", completed: true},
				 {id: 2, body: "Finish GA homework.", completed: false},
				 {id: 3, body: "Read 'The Portable Nietzsche.'", completed: true},
				 {id: 4, body: "Fix iPad.", completed: false}]


app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})