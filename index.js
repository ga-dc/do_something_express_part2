var express = require("express")
var jade = require('jade')
var app = express()

app.set('view engine', 'jade');


app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})