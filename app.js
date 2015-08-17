var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var tasks = [
  {id: 1, body: "clean", completed: true},
  {id: 2, body: "take out trash", completed: true},
  {id: 3, body: "study", completed: false},
  {id: 4, body: "mow lawn", completed: true},
  {id: 5, body: "wash dishes", completed: false}
];


app.get('/', function(req, res){
  res.send("Hello World");
});

app.get('/todos', function(req, res){
  res.json(tasks);
});

app.get('/todos/:id', function(req, res){
  var task = req.params.id;
  res.json(tasks[task]);
});

app.post('/todos', function(req, res){
  res.send("test");
});

app.listen(4000, function(){
  console.log("App listening at http://localhost:4000");
});
