var express = require('express');
var app = express();
var bodyParser = require("body-parser")

var hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//// routes ////


app.get('/', function(req, res) {
    res.render('index', {title:"My Blog", entries:dosoEngine.getTaskEntries()});
});

app.get('/task/:id', function(req, res) {
    var entry = dosoEngine.getTaskEntry(req.params.id);
    res.render('task',{title:task.body, content:task});
});

app.listen(3000);
