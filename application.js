var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests (ajax calls)
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

// sets view engine to hbs
app.set("view engine", "hbs")

// allows files from app folder
app.use(express.static("app"))

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

var all_routes = require('./all_routes');
all_routes.setup(app);
