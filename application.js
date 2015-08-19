var express = require("express")
var app = express()

var listsController= require("listsController")
var app = listsController()

var tasksController = require("tasksController")
var app = tasksController()

var index = require ("index")
var app = index()

var layout = require("layout")
var app = layout()

var tasks =[
  {id: 1,  body: "Wash dishes", completed: true},
  {id: 2,  body: "Make lunch", completed: true},
  {id: 3,  body: "Take out the trash", completed: true}
  {id: 4,  body: "Go grocery shopping", completed: true}
  {id: 5,  body: "Call grandparents", completed: true}

]

var bodyParser = require("body-parser")

app.listen(4000, function(){
  console.log("app listening on port 4000")

})

app.get("/tasks", tasksController.index);
app.get("/tasks/:id",tasksController.show);
app.post("/tasks", tasksController.create);
app.delete("/tasks/:id", tasksController.delete);
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")
