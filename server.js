var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('hello world');
});
app.get('/colton', function(req, res){
  res.send('ello poppet');
});
app.get('/colton2', function(req, res){
  res.send('<|:)');
});
app.listen(3000);
