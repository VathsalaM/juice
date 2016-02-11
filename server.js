var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res,next){
  res.redirect('/main.html');
  next();
});

app.listen(3000);

// http.createServer(8000,app);

