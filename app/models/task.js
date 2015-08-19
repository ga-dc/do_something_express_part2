// Create a varable with 5 object in an array.
var tasks = [{
              id: "1", 
              body: "Task One", 
              completed: false
            },

            {
              id: "2", 
              body: "Task Two", 
              completed: true
            },

            {
              id: "3", 
              body: "Task Three", 
              completed: true
            },

                        {
              id: "4", 
              body: "Task Four", 
              completed: true
            },

            {
              id: "5", 
              body: "Task Five", 
              completed: true
            }]

// Create an index route that responds with a list of all of the objects.
// Use Andy's tip about using JSON.
app.get("/tasks", function(req, res){
  res.json(tasks)
});

// Create a show route that shows one single todo.
app.get("/tasks/:id", function(req, res){
  // Create a for loop to create a show route for EACH todo.
  for(var i = 0; i < tasks.length; i++)
    if (tasks[i].id == req.params.id) {
      res.json(tasks[i])
    };
});

// Create a post route that allows you to add an object to the array.
app.post("/tasks", function(req,res){
  tasks.push(req.body)
  res.json(req.body)
});