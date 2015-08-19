var tasks = [{
  id: 1,
  body: "sweep floor",
  completed: true
}, {
  id: 2,
  body: "clean windows",
  completed: false
}, {
  id: 3,
  body: "wipe counters",
  completed: true
}, {
  id: 4,
  body: "dust tables",
  completed: false
}, {
  id: 5,
  body: "Wash dishes",
  completed: true
}];

module.exports = {
  all: function(){
    return tasks
  },
  find: function(id){
    for (i = 0; i < tasks.length; i++) {
      //find the right task
      if (tasks[i].id == id){
        return tasks[i];
      }
    }
  },
  create: function(newTask){
    tasks.push(newTask);
  },
  delete: function(id){
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].id == id){
      	tasks = tasks.splice(i,1)
    	return
      }
    }
  }
}
