var express = require('express'),
  app = exports.app = express();

  app.get("/", function(req, res){
    res.send("hello world")
  })

  app.listen(4000, function(){
    console.log("app listening on port 4000")
  })
