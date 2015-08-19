var tasks = [
  {id: 1, body:"my first todo",completed: false},
  {id: 2, body:"my second todo",completed: true},
  {id: 3, body:"my third todo",completed: false}
]

module.exports = {
  all: function(){
    return tasks
  },
  find: function(id){
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].id == id){
        return tasks[i]
      }
    }
  },
  create: function(body){
    tasks.push(body)
    return body
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
