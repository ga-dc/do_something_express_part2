
var tasks = [
  {id: 1, body: "go skiing", completed: false},
  {id: 2, body: "do WDI homework", completed: true},
  {id: 3, body: "write a bestselling novel", completed: false},
  {id: 4, body: "catsit sister's cat", completed: false},
  {id: 5, body: "travel to Antarctica", completed: false},
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
    for(var i = 0; i < tasks.length; i++) {
      if(tasks[i].id == id) {
        tasks = tasks.splice(i,1)
        return
      }
    }
  }
}
