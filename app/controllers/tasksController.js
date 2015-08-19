var task = require("../models/task.js");

module.exports = {

  sayHello: function(){
    console.log("tasksController working")
  },
  index: function(req, res) {
    res.json(task.all())
  },
  show: function(req, res) {
    res.json(task.find(req.params.id))
  },
  create: function(req, res) {
    var t = task.create(req.body)
    res.json(t)
  },
  delete: function(req, res) {
    task.delete(req.params.id)
    res.json("")
  }

}
