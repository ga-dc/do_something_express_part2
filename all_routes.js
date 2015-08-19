var tasks = [
  {id:1, body:"Run $ npm init to initialize a new NodeJS application.", completed:true },
  {id:2, body:"Install the express node module by running $ npm install --save express", completed:true },
  {id:3, body:"Make a new file $ touch application.js", completed:true },
  {id:4, body:"Run $ npm install -g nodemon so you don't have to restart the server every time you update a file.", completed:false },
  {id:5, body:"Start up your by running $ nodemon application.js", completed:false }
];

function setup(app){

// tasks#index
app.get('/tasks', function (req, res) {
  res.json(tasks)
});

// tasks#new
app.get("/tasks/new", function(req, res){
  res.send('GET a new task');
})

// tasks#show
app.get("/tasks/:id", function(req, res){
  var toDo = req.params.id - 1
  res.json("To Do: ", tasks[toDo])
})

// tasks#post
app.post("/", function(req, res){
  tasks.push(req.body)
  res.json(tasks)
})

// tasks#put
app.put("/", function(req, res){
  res.send('PUT a request to the index');
})

// tasks#delete
app.delete('/tasks/:id', function (req, res) {
  if(tasks.length <= req.params.id - 1) { // checking the length of our tasks to make sure we don't try to delete something that isn't there
    res.statusCode = 404;
    return res.send('Error 404: No task found');
  }
  tasks.splice(req.params.id - 1, 1); // If no error we splice the array to remove the task and return remaining tasks
  res.json(tasks);
});

}
exports.setup = setup;
