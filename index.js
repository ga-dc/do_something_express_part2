var express = require("express")
var app = express()

var tasks =[
  {id:1, body:"my first todo", completed:false},
  {id:2, body:"my second task", completed:false},
    {id:3, body:"my third task", completed:false},
      {id:4, body:"my fourth task", completed:false},
        {id:5, body:"my fifth task", completed:false}
]
app.get("/tasks", function(req, res){
  res.json(tasks)
})

app.get("/tasks/:id", function(req, res){
  for(var i=0; i< tasks.length; i++){
    if(tasks[i].id== req.params.id){
      res.json(tasks[i])
    }
  }
})

app.post("/tasks", function(req,res){
  tasks.push(req.body)
  res.json(req.body)
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
