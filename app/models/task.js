var tasks = [
  {"id": 1, "body": "Make a tasks list", "completed": false},
  {"id": 2, "body": "Make a tasks list", "completed": false},
  {"id": 3, "body": "Make a tasks list", "completed": false},
  {"id": 4, "body": "Make a tasks list", "completed": false},
  {"id": 5, "body": "Make a tasks list", "completed": false}
];

exports.getTaskEntries = function() {
    return tasks;
}

exports.getTaskEntry = function(id) {
    for(var i=0; i < tasks.length; i++) {
        if(tasks[i].id == id) return tasks[i];
    }
}
