var express = require("express")
var app = express()


app.get("/", function(req, res){
  res.send("Do something app part 2")
})


//from readme file
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

app.listen(4000, function(){
  console.log("listening on port 4000")
})