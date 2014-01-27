var http = require('http');
var server = http.createServer (function(request, response)  {
	response.end('Hello World');
});
server.listen(process.env.PORT || 3000);
console.log('Server is running...');
