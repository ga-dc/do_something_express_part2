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
//setting view engine to handlebars
app.set("view engine", "hbs");
// this allows the app to handle json post requests
app.use(bodyParser.json());
// this allows the app to handle form submissions
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/app/views/index.html");
});

app.get('/todos', function(req, res){
  res.json(tasks);
});

app.get('/todos/:id', function(req, res){
  var task = req.params.id;
  res.json(tasks[task]);
});

app.post('/', function(req, res){
  res.render('newTask', {
    id: req.params.id,
    body: req.params.body,
    completed: req.params.completed
  });
});

app.listen(4000, function(){
  console.log("App listening at http://localhost:4000");
});
