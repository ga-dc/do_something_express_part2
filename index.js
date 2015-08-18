var express = require('express');
var app = express();

var tasks = [
      {id: 1, body: "buy groceries", completed: false},
      {id: 2, body: "take the dog out", completed: false},
      {id: 3, body: "feed the dog", completed: false},
      {id: 4, body: "pet the dog", completed: false},
      {id: 5, body: "vacuum", completed: false},
]

//index
app.get('/tasks', function(req, res) {
  res.json(tasks);
});

//show
app.get('/tasks/:id', function(req, res){
  res.json(tasks[req.params.id - 1]);
});

//post
app.post('/tasks', function(req, res){
  res.json(tasks[req.params]);
});

//update
app.put('/tasks/:id', function(req, res){
  res.json(tasks[req.params.id - 1]);
});

//delete
app.delete('/tasks/:id', function(req, res){
  res.json(tasks[req.params.id - 1]);
});




app.listen(4000, function(){
  console.log("app listening on port 4000")
})
