//root
app.get("/", function(req, res){
  res.json(tasks)
})
//showall
app.get("/tasks", function(req, res){
  res.json(tasks)
})
//show indiv
app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id - 1])
})
//edit
app.get('/tasks/:id/edit', function (req, res){
  res.send('EDIT task:' + req.params.id);
});
//new
app.get('/tasks/new', function (req, res){
  res.json('GET show of new tasks');
});
//create
app.post("/", function(req, res){
  res.send("POST to create a new task")
})
//delete
app.delete('/tasks/:id', function (req, res){
  res.send('DELETE task:' + req.params.id);
});
