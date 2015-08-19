var task = require("../models/task");

module.exports = {
  index: function(request,response){
    response.json(task.all());
  }


}
