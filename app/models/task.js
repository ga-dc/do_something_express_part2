var tasks = [ {id: 1, body: 'toDo1', completed: false},
              {id: 2, body: 'toDo2', completed: true},
              {id: 3, body: 'toDo3', completed: false},
              {id: 4, body: 'toDo4', completed: true},
              {id: 5, body: 'toDo5', completed: false}, ]

module.exports = {

  sayHello: function(){
      console.log("task") },
  all: function() {
    return tasks
  },
  find: function(id) {
    for( var i = 0; i < tasks.length; i++ ) {
      if( tasks[i].id == id ) {
        return tasks[i]
      }
    }
  },
  create: function(body) {
    tasks.push(body)
    return body
  },
  delete: function() {
    for( var i = 0; i < tasks.length; i++ ) {
      if ( tasks[i].id == id ) {
        tasks = tasks.splice(i, 1)
        return
      }
    }
  }

}
