function setup(app) {

  var tasks = [
    {
      id: 1,
      body: "complete express homework",
      completed: false
    },
    {
      id: 2,
      body: "cut my hair",
      completed: true
    },
    {
      id: 3,
      body: "cook dinner",
      completed: false
    },
    {
      id: 4,
      body: "do a load of laundry",
      completed: false
    },
    {
      id: 5,
      body: "watch rick and morty",
      completed: true
    }
  ]

  app.get("/tasks", function(req, res){
    res.json(tasks)
  })

  app.get("/tasks/:id", function(req, res){
    var todo = parseInt(req.params.id) - 1
    res.json(tasks[todo])
  })

  // used CocoaRestClient to test post routes
  // it worked except that it entered id: and completed: values as strings, not int and boolean

  app.post("/tasks", function(req, res){
    tasks.push(req.body)
    res.json(tasks)
  })

  // update only patches completed value per hw readme, but could easily be changed to include body
  app.post("/tasks/:id", function(req,res){
    var todo = parseInt(req.params.id) - 1
    tasks[todo].completed = req.body.completed
    res.json(tasks[todo])
  })

  app.delete("/tasks/:id", function(req, res){
    var todo = parseInt(req.params.id) - 1
    tasks.splice(todo, 1)
    res.json(tasks)
  })

}

exports.setup = setup;
