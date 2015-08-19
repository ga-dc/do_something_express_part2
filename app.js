var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set("view engine", "hbs")//settting handlebarsJS
app.listen(3000,function(){
  console.log("AWESOME BURRITO APP IS LIVE ON PORT 3000 BABY!")
});
// app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes');
routes.setup(app);
