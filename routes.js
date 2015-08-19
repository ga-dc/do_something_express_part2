var tasksController = require("./controllers/tasksController.js");

function setup(app){
  app.get("/", function(request,response){
      response.sendFile(__dirname+ "/views/index.hbs");
  });

  app.get("/tasks", tasksController.index);
    var test = "hello";
    response.render("/views/index"),{test: test});
};
  //
  // app.get("/tasks", function(req, res){
  //   res.json(tasks)
  // })
  //
  // app.get("/tasks/:id", function(req, res){
  //   for(var i = 0; i < tasks.length; i++){
  //     if(tasks[i].id == req.params.id){
  //       res.json(tasks[i])
  //     }
  //   }
  // })
  //
  // app.post("/tasks", function(req,res){
  //   tasks.push(req.body)
  //   res.json(req.body)
  // })


exports.setup = setup; //review wtf why
