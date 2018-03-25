//Her we are creating a server and send a request to that server...
var http = require('http');

var server = http.createServer(function(req, res) { //request and responce
    console.log('request was made: ' + req.url);//this one is to show each time what url we have requested
    res.writeHead(200, {'Content-Type': 'text/plain'});// the 200 is the status code. you can see it from the inspect of the localhost page in network tap
    res.end('Hey Mohammad');
});

server.listen(3000, '127.0.0.1');
console.log('now we are listening to port 3000');
