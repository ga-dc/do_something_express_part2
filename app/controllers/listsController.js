function setup(app) {

  // var tasksController = require('./tasksController');
  // tasksController.setup(app);

  var lists = [
    {
      id: 1, name: "5 minutes tasks", todos: [4]
    },
    {
      id: 2, name: "1 hour tasks", todos: [[1], [2]]
    }

  ]

  app.get("/lists", function(req, res){
    res.json(lists)
  })

  app.get("/lists/:id", function(req, res){
    var todoList = parseInt(req.params.id) - 1
    res.json(lists[todoList])
  })

  app.post("/lists", function(req, res){
    lists.push(req.body)
    res.json(lists)
  })

  app.post("/lists/:id", function(req,res){
    var todoList = parseInt(req.params.id) - 1
    lists[todoList].todos = req.body.todos
    res.json(lists[todoList])
  })

  app.delete("/lists/:id", function(req, res){
    var todoList = parseInt(req.params.id) - 1
    lists.splice(todoList, 1)
    res.json(lists)
  })

}

exports.setup = setup;
