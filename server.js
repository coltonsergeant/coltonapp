var ejs = require('ejs');
var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
app.use('/static', express.static('static'));
app.engine('.html',ejs.renderFile);

mongo.connect('mongodb://localhost/coltonapp', function(err, db) {
app.get('/api/data', function(req, res) {
	db.collection('items').find().toArray(function(err, items) {
		res.json(items);
});
	});
app.get('/*', function(req, res){
  res.render('index.html');
});
app.listen(process.env.PORT||3000);
console.log("Server is running at http://localhost:3000 type control +c to exit")
});