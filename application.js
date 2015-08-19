var express = require("express")
var app = express()


app.get("/", function(req, res){
  res.send("Do something app part 2")
})




app.listen(4000, function(){
  console.log("listening on port 4000")
})
