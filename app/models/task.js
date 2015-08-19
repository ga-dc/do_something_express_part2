var tasks = [
  {
    "id":1,
    "body":"Do laundry",
    "completed":false
  },
  {
    "id":2,
    "body":"Walk dog",
    "completed":false
  },
  {
    "id":3,
    "body":"Clean kitchen",
    "completed":false
  },
  {
    "id":4,
    "body":"Learn Express",
    "completed":false
  },
  {
    "id":5,
    "body":"Take Excedrin",
    "completed":false
  },
];

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
