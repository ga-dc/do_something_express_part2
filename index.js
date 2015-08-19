var express         = require('express');
var app             = express();
var task            = require('./app/models/task');
var tasksController = require('./app/controllers/tasksController');
var index           = require('./app/views/index.html');



app.get("/", function ( req, res ) {
  res.json( tasks )
});

app.get("/:task", function ( req, res ) {
  res.send( tasks[req.params.task] )
});

app.get("/", function ( req, res) {
  res.sendFile(__dirname + "/app/views/index.html");
});

app.post("/", function ( req, res ) {
  res.send(tasks.push)
});


app.listen(4000, function () {
  console.log("app listening on port 4000");
})
