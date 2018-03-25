//Here we will send a JSON to the web

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) { 

    console.log('request was made: ' + req.url);

    res.writeHead(200, { 'Content-Type': 'application/json' });

    var myObj = {
        name: 'Mohamad',
        job: 'coder',
        age: 38
    };

    res.end(JSON.stringify(myObj));

});

server.listen(3000, 'localhost');
console.log('now we are listening to port 3000');