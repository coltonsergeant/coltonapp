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
app.listen(process.env.PORT||3000);
console.log("Server is running at http://localhost:3000...")
