var list = require("../models/list.js");

module.exports = {

  index: function(req, res) {
    res.json(list.all())
  },
  show: function(req, res) {
    res.json(list.find(req.params.id))
  },
  create: function(req, res) {
    var l = list.create(req.body)
    res.json(l)
  },
  delete: function(req, res) {
    list.delete(req.params.id)
    res.json("")
  }

}
