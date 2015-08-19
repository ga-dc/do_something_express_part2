// function setup(app, tasks) {
//   app.get("/", function(req, res){
//     res.json(tasks);
//   });
//
//   app.get("/tasks/:id", function(req, res){
//     res.json(tasks[req.params.id]);
//   });
//
//   app.post("/tasks", function(req, res){
//     tasks.push(req.body)
//     res.json(req.body)
//   });
// }

// exports.setup = setup;

var task = require("../models/task")

module.exports = {
  index: function(req,res){
    res.json(task.all())
  },
  show: function(req, res){
    res.json(task.find(req.params.id))
  },
  create: function(req,res){
    var t = task.create(req.body)
    res.json(t)
  },
  delete: function(req, res){
    task.delete(req.params.id)
    res.json("")
  }
}
