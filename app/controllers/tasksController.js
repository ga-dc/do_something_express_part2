// var task = require("../models/task")
var tasks = [
{id: 1, body: "wash dishes", completed: false},
{id: 2, body: "clean clothes", completed: false},
{id: 3, body: "vacuum carpet", completed: false},
{id: 4, body: "make bed", completed: false},
{id: 5, body: "dust tables", completed: false}
];

function setup(app) {
  // index
  app.get("/", function(req, res){
    res.json(tasks)
  })
  //new
  app.get('/new', function (req, res) {
   res.json('Create new task');
 });
// show
  app.get("/:id", function(req, res){
    var todoID = (req.params.id) - 1
    res.json(tasks[todoID])
  })
// create
  app.post("/", function(req, res){
    tasks.push(req.body)
    res.json(req.body)
    })
  //edit
  app.get("/:id/edit", function(req, res){
    var todoID = (req.params.id) - 1
    res.json({edit: tasks[todoID]})
  })
  //update
    app.patch("/:id", function(req, res){
      var todoID = (req.params.id) - 1
      res.json(tasks[todoID])
    })
// delete
  app.delete("/:id", function(req, res){
    tasks.delete(req.params.id)
    res.json()
  })
}

exports.setup = setup;
