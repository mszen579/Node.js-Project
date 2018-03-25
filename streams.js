//Buffer is something like a carriage that hold a chunk of data instead of waiting of the whole data to be loaded
//while stream is the flow of these Buffers from the server to the client
//by using buffers and stream, client do not have to wait for loading the whole data. he start consuming data while it is transfering to him/her. 

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');//this is to read the stream.So in this case it will read stream in chunks amd laod it to the 'myReadStream' variable . We have added the utf8 so we can read the actual text in readMe.txt
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');//this is to write the stream.So in this case it will write stream in chunks amd laod it to the 'myReadStream' variable . We have added the utf8 so we can write the actual text in readMe.txt


// myReadStream.on('data', function(chunk){
// console.log('new chunk receivd: ');
// //console.log(chunk);
//     myWriteStream.write(chunk); // we have used this variable to write the data we have readen and write it to the writeMe.txt file
// });


//another and faster method for read and write a stream is using PIPE
myReadStream.pipe(myWriteStream);



// now using the server to display the text file or any other file to the web

var server = http.createServer(function (req, res) { //request and responce

    console.log('request was made: ' + req.url);//this one is to show each time what url we have requested

    res.writeHead(200, { 'Content-Type': 'text/html' });// the 200 is the status code. you can see it from the inspect of the localhost page in network tap

    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); //we delete the line related to 'myWriteStream' so instead of writing in the node console we show it on the web

    myReadStream.pipe(res);

});

server.listen(3000, 'localhost');//or we can use 127.0.0.1 instead of localhost
console.log('now we are listening to port 3000');
