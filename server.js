var ejs = require('ejs');
var express = require('express');
var app = express();
app.use('/static', express.static('static'));
app.engine('.html',ejs.renderFile);
app.get('/api/data', function(req, res) {
	res.json(['red', 'blue', 'green', 'yellow']);
});
app.get('/*', function(req, res){
  res.render('index.html');
});
app.listen(process.env.PORT||3000);
console.log("Server is running at http://localhost:3000 type control +c to exit")